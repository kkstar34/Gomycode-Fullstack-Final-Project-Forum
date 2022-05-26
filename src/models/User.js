import { query, collection } from 'firebase/firestore';
import { where } from 'firebase/firestore';
import { getDocs } from 'firebase/firestore';
import db from '../config/firebaseConfig';

class UserModel {

    search_id;

    constructor(search_id) {
        this.search_id = search_id;
    }

    async getUser(email) {
        let q = query(collection(db, "users"), where('email', '==', email) );
        let u = await getDocs(q);
        u = u.docs;
        let userId ;
        let userRef;
        let doc = [];
        for (let i = 0; i < u.length; i++) {
            userRef = u[i].ref;
            userId =  u[i].id;
            doc = u[i].data() ;
        }
        return {...doc, userId, userRef};
    }


}





export default UserModel;