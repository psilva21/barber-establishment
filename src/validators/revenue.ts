import { celebrate, Joi, Segments } from 'celebrate'


export default class RevenueValidator {
    public static create = celebrate({
        [Segments.BODY]: Joi.object().keys({
            registrationDate: Joi.string().required(),
            yieldType: Joi.string().required(),
            description: Joi.string().required(),
            value: Joi.number().required(),
            payment: Joi.string().required(),
            responsible: Joi.string().required(),
        })    
    })
}