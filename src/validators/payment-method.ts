import { celebrate, Joi, Segments } from 'celebrate'

export default class PaymentMethodValidator {
    public static create = celebrate({
        [Segments.BODY]: Joi.object().keys({
           title: Joi.string().required(),
        })    
    })
}