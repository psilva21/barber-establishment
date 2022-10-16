import { celebrate, Joi, Segments } from 'celebrate'
import { RevenueType } from '../enums'

export default class RevenueValidator {
    public static create = celebrate({
        [Segments.BODY]: Joi.object().keys({
            date: Joi.string().required(),
            type: Joi.string().valid(RevenueType.service, RevenueType.sale),
            service: Joi.array().items(Joi.string()).required(),
            value: Joi.number().required(),
            payment: Joi.string().required(),
            responsible: Joi.string().required(),
        })    
    })
    public static filter = celebrate({
        [Segments.QUERY]: Joi.object().keys({
            filterDate: Joi.string(),
        })
    })
}