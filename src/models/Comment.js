
import { doc, getDoc } from 'firebase/firestore';
import db from '../config/firebaseConfig';

class CommentModel {

     search_id;

    constructor(search_id) {
        this.search_id = search_id;
    }


    async getUser(){
        let q = doc(db, "users", this.search_id);
        const docQuery = await getDoc(q);
        return  docQuery.data();
    
    }




}


export default CommentModel;