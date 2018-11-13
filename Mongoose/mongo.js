const mongoose=require('mongoose');

mongoose.Promise = Promise;
mongoose.set('debug',true);
mongoose.connect('mongodb://localhost/xxo',{
    useNewUrlParser:true
})
mongoose.connection.on('open',()=>{
    console.log('mongodb open ')
})
const UserSchema = new mongoose.Schema({
    name: String,
    times:{
        type:Number,
        default:0
    }
})

mongoose.model('User',UserSchema);

const User = mongoose.model('User');
;(async()=>{
    console.log(await User.find({}).exec());


    const user=new User({
        name:'xxx'
    });
    
    await user.save();

    console.log(await User.find({}).exec());
})