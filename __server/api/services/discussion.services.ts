import Discussion from "../models/discussion.model";

export class services{
    async createDiscussion(id:number, topic:string, description:string){
        return await Discussion.create({
            ID_DISCUSSION: null,
            ID_USER: id,
            DISCUSSION_TOPIC: topic,
            CAPTION: description,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }

    async getDiscussion(id:number){
        return await Discussion.findOne({
            where:{
                ID_DISCUSSION: id
            }
        });
    }

    async getDiscussions(){
        return await Discussion.findAll();
    }
}