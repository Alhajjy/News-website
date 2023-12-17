const express = require("express");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const app = express();
const cors = require("cors");
app.use(cors("http://localhost:3001/"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
const Usermodel = require("./models/Users");
const Articlemodel = require("./models/Article");
const StaticsModel = require("./models/Staticts");
const PostModel = require("./models/Post");
const AdminModel = require("./models/Admins");
const tagModel = require("./models/Tags");
const jwt = require("jsonwebtoken");
const { ObjectId } = require("mongodb");
const _data = "mongodb://localhost:27017/app";
mongoose.connect(`${_data}`);
/* GET funcs */
app.get("/", (req, res) => {
    res.send("Hello");
});
app.get("/article", async (req, res) => {
    const artc = await Articlemodel.find();
    res.json(artc);
});
app.get("/statics", async (req, res) => {
    const statics = await StaticsModel.find();
    res.json(statics);
});
app.get("/tags", async (req, res) => {
    const tags = await tagModel.find();
    res.json(tags);
});
app.get("/users", async (req, res) => {
    const users = await Usermodel.find();
    res.json(users);
});
app.get("/posts", async (req, res) => {
    const posts = await PostModel.find();
    res.json(posts);
});
app.get("/saved", async (req, res) => {
    try {
        const postColl = mongoose.connection.db.collection("posts");
        const posts = await postColl
            .find({
                _id: {
                    $in: [
                        new ObjectId("654798c0e2a24a67ae14f28f"),
                        new ObjectId("65539e4656d4931058dc8037"),
                        new ObjectId("65539e4e56d4931058dc8038"),
                    ],
                },
            })
            .toArray();
        res.json(posts);
    } catch (err) {
        console.error(err);
        res.status(500).send("Internal Server Error");
    }
});
app.get("/search", async (req, res) => {
    const field = req.query.field;
    const postColl = mongoose.connection.db.collection("posts");
    const posts = await postColl
        .find({
            $or: [
                { title: { $regex: field, $options: "i" } },
                { text: { $regex: field, $options: "i" } },
                { tags: { $regex: field, $options: "i" } },
            ],
        })
        .toArray();
    res.json(posts);
    try {
    } catch {
        console.error("Error searching text:", err);
        res.status(500).json({ error: "Internal server error" });
    }
});
/* POST Requests */
/*
    write comment in every action:
    @desc Login Create Token
    @Route POST /login
    @Access [user, admin, manager]
*/
app.post("/posts", async (req, res) => {
    const post = req.body;
    const newPost = new PostModel({
        title: post.title,
        text: post.text,
    });
    await newPost.save();
    await res.json({
        message: "post posted successfully..",
        post: post,
    });
});

app.post("/article", async (req, res) => {
    const article = req.body;
    const newArticle = new Articlemodel({
        title: article.title,
        article: article.article,
    });
    await newArticle.save();
    const getIt = await Articlemodel.find({ title: article.title });
    res.json({
        message: "Article was added succesfully :)",
        article: getIt,
    });
});

app.post("/tags", async (req, res) => {
    const tag = req.body;
    const newTag = new tagModel({
        tag: tag.tag,
        category: tag.category,
    });
    await newTag.save();
    res.json({
        message: "new tag added..",
        tag: tag,
    });
});

app.post("/admins", async (req, res) => {
    const { username, password } = req.body;
    const theUser = await AdminModel.findOne({ username });
    const hashedPassword = bcrypt.hashSync(password, 10);
    const data = {
        writers: [],
        tags: [],
        savedPosts: [],
        hatedPosts: [],
    };
    if (theUser) {
        return res.json({ message: "This user is already exists!" });
    } else {
        const newAdmin = new AdminModel({
            username: username,
            password: hashedPassword,
            data: {
                tags: [],
                writers: [],
                savedPosts: [],
            },
        });
        await newAdmin.save();
        return res.json({
            message: "User created succesfully :)",
            user: req.body,
        });
    }
});

app.post("/login", async (req, res) => {
    const { username, password } = req.body;

    const admin = await AdminModel.findOne({ username });
    !admin && res.json({ message: "user doesn`t exist!" });
    const isPasswordValid = await bcrypt.compare(password, admin.password);
    !isPasswordValid &&
        res.json({ message: "Username or password is not correct!!!" });

    const token = jwt.sign({ id: admin._id, data: admin.data }, "secret", {
        expiresIn: "1s",
    });

    return res.json({ token, adminID: admin._id, data: admin.data });
});
// app.post("/login", async (req, res) => {
//     const { name, password } = req.body;

//     const admin = await AdminModel.findOne({ name });
//     !admin && res.json({ message: "user doesn`t exist!" });
//     const isPasswordValid = await bcrypt.compare(password, admin.password);
//     !isPasswordValid &&
//         res.json({ message: "Username or password is not correct!!!" });

//     const token = jwt.sign({ id: admin._id }, "Homsi");

//     return res.json({ token, adminID: admin._id });
// });
// console.log(process.env.SECRET);
app.post("/verify", (req, res) => {
    const { token } = req.body;
    jwt.verify(token, "secret", (err, decoded) => {
        if (err) {
            throw res.status(401).json({
                status: "Error",
                message: err.message,
                expiredAt: err.expiredAt,
            });
        }
    });
    res.status(200).json({ message: "success", token, data: decoded });
});

app.listen(3001, () => {
    console.log("done");
});
