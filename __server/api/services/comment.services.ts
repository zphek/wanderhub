import Comment from "../models/comment.model";

export default class services{

    async createComment(description:string, ID_USER:number, ID_DISCUSSION:number, ){
        return await Comment.create({
            ID_COMMENTS: null,
            DESCRIPTION_C: description,
            ID_USER,
            ID_DISCUSSION,
            LIKES: 0,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    async getComment(id:number){
        return await Comment.sequelize?.query(`SELECT comments.DESCRIPTION_C, comments.LIKES, comments.createdAt, comments.updatedAt, users.USERNAME, users.FULL_NAME, users.URL_IMAGE FROM comments INNER JOIN users ON comments.ID_USER = users.ID_USER INNER JOIN discussions ON comments.ID_DISCUSSION = discussions.ID_DISCUSSION WHERE comments.ID_DISCUSSION = ${id}`);
    }
}