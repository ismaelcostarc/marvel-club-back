import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

export default class CharactersController {
  public async show({ auth }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    const characters = await user.related('characters').query()
    return characters
  }

  public async create({ auth, request }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    const newUserSchema = schema.create({
      code: schema.number(),
    })

    const { code } = await request.validate({
      schema: newUserSchema,
    })

    const comic = await user.related('characters').create({ code: code })
    return comic
  }

  public async update({ auth, request }: HttpContextContract) {
    const user = await auth.use('api').authenticate()
    const newUserSchema = schema.create({
      code: schema.number(),
    })

    const { code } = await request.validate({
      schema: newUserSchema,
    })

    const comic = await user.related('characters').create({ code: code })
    return comic
  }

  public async delete({ auth, request, response }: HttpContextContract) {
    const user = await auth.use('api').authenticate()

    const id = request.param('id')

    const characters = await user.related('characters').query()
    const comic = characters.find((comic) => comic.id === +id)
    if (!comic) {
      response.status(422).json({ message: 'Character not found' })
      return
    }

    comic.delete()
    return true
  }
}
