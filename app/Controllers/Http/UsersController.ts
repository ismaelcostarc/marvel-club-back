import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from 'App/Models/User'

export default class UsersController {
  public async create({ auth, request, response }: HttpContextContract) {
    const newUserSchema = schema.create({
      name: schema.string(),
      address: schema.string(),
      phone: schema.number(),
      email: schema.string([rules.email()]),
      password: schema.string([rules.confirmed(), rules.minLength(8)]),
    })

    const payload = await request.validate({
      schema: newUserSchema,
    })

    await User.create(payload)
    const token = await auth.use('api').attempt(payload.email, payload.password)

    return token
  }

  public async show({ auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    return user
  }

  public async update({ auth, response, request }: HttpContextContract) {
    const body = request.only(['name', 'email', 'address', 'password'])

    const user = await auth.use('api').authenticate()
    await user.merge(body).save()
    return user
  }

  public async destroy({ auth }: HttpContextContract) {
    const { id } = await auth.use('api').authenticate()
    await auth.use('api').revoke()
    const user = await User.findOrFail(id)
    await user.delete()

    return true
  }
}
