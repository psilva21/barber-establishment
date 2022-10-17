import { model, Schema } from 'mongoose'
import { CollectionName } from '../enums'

const schema = new Schema({
    title: {
        type: Schema.Types.String,
        required: true,
    },
})

export default model(CollectionName.PAYMENT_METHOD, schema)