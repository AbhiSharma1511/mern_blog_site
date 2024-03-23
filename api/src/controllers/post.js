import db from "../db/db.js";

export const getPosts =(req,res)=>{
    const q = req.query.genre?  'select * from posts where genre=? ' : 'select * from posts' ;

    db.query(q,[req.query.genre],(err,data)=>{
        if(err) return res.send(err);

        return res.status(200).json(data);
    });
}

export const getPostGenre =(req,res)=>{
    const q = 'select * from posts where genre=? ';
    db.query(q,[req.query.genre],(err,data)=>{
        if(err) return res.send(err);
        return res.status(200).json(data);
    });
}

export const getPost =(req,res)=>{
    res.json("this is a post controller");
}
export const addPost =(req,res)=>{
    res.json("this is a post controller");
}
export const deletePost=(req,res)=>{
    res.json("this is a post controller");
}
export const updatePost =(req,res)=>{
    res.json("this is a post controller");
}