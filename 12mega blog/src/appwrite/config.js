import { Query } from 'appwrite'
export class Service{
client= new Client();
databases;
bucket;
constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
    this.databases=new Databases(this.client)
    this.bucket=new Storage(this.client)
}
    async createPost(title,slug,featuredImage,content,userId,status){
        try {
            return await database.createDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,
            {
                title,
                featuredImage,
                status,
                userId,
                content,
            })
        } catch (error) {
            console.log("Appwrite service :: createPost :: error",error)
        }
    }
    async updatePost(slug,{title,featuredImage,content,status}){
        try {
            return await databases.updateDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,slug,
            {
                    title,
                    featuredImage,
                    status,
                    content
                
            })
        } catch (error) {
             console.log("Appwrite service :: updatePost :: error",error)
        }
    }
    async deletePost(slug){
        try {
            await this.databases.deleteDocument(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,slug
        )
        return true;
        } catch (error) {
             console.log("Appwrite service :: DeletePost :: error",error)
             return false
        }
    }
    async getPost(slug){
        try {
            return await this.databases.getDocument(
                conf.appwriteCollectionId,conf.appwriteDatabaseId,slug
            )
        } catch (error) {
             console.log("Appwrite service :: getPost :: error",error)
             return false
        }
    }
    async getPosts(queries=[Query.equal("status","active")]){
        try {
            await this.databases.listDocuments(
                conf.appwriteDatabaseId,conf.appwriteCollectionId,queries
            )
        } catch (error) {
             console.log("Appwrite service :: getPosts :: error",error)
        }
    }

    async uploadFile(file){
        try {
            await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
        } catch (error) {
             console.log("Appwrite service :: uploadPost :: error",error)
             return false
        }
    }
    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileId
            )
             return true
        } catch (error) {
             console.log("Appwrite service :: deleteFile :: error",error)
             return false
        }
    }
    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}
const service=new Service()
export default service