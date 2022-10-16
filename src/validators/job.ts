import { celebrate, Joi, Segments } from 'celebrate'

export default class JobValidator {
    public static create = celebrate({
        [Segments.BODY]: Joi.object().keys({
            jobs: Joi.array().items(Joi.object().keys({
                title: Joi.string().required()
            }))
        })    
    })
}