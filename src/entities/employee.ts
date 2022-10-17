import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    name: {
        type: Schema.Types.String,
        required: true,
    },
})

export default model(CollectionName.EMPLOYEES, schema)