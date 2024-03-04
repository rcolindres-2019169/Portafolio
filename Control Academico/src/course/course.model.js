import  {Schema, model} from 'mongoose'

const courseSchema = Schema({
    name:{
        type:String,
        required : true
    },
    description: {
        type: String,
        required: true
    }
}, {
    versionKey: false
})
export default model('course', courseSchema)