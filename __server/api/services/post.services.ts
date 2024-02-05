import Post from "../models/post.model";

export default class services{
    public async createPost(CAPTION:string, ID_USER:number){
        return await Post.create({
            ID_POST: null,
            URL_IMAGE: "",
            CAPTION,
            ID_USER,
            LIKES: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    public async deletePost(ID_POST:number, ID_USER:number){
        return await Post.destroy({
            where:{
                ID_POST,
                ID_USER
            }
        });
    }

    public async getPosts(){
        return await Post.sequelize?.query("SELECT * FROM posts INNER JOIN users ON users.ID_USER = posts.ID_USER;");
    }

    public async getPostsByUser(USERNAME:string){
        return await Post.sequelize?.query(`SELECT * FROM posts INNER JOIN users ON users.ID_USER = posts.ID_USER WHERE users.USERNAME = '${USERNAME}';`)
    }
}