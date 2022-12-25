import { DateTime } from 'luxon'
import { BaseModel, column, hasMany, HasMany } from '@ioc:Adonis/Lucid/Orm'
import Comic from './Comic'
import Character from './Character'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public name: string

  @column()
  public phone: number

  @column()
  public address: string

  @column({ serializeAs: null })
  public password: string

  @hasMany(() => Comic)
  public comics: HasMany<typeof Comic>

  @hasMany(() => Character)
  public character: HasMany<typeof Character>

  @column.dateTime({ autoCreate: true })
  public createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updatedAt: DateTime
}
