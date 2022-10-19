import { celebrate, Joi, Segments } from 'celebrate'

export default class EmployeeValidator {
    public static create = celebrate({
        [Segments.BODY]: Joi.object().keys({
           name: Joi.string().required(),
           cpf: Joi.string().required(),
        })    
    })
}