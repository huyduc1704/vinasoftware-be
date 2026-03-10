
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Role
 * 
 */
export type Role = $Result.DefaultSelection<Prisma.$RolePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Region
 * 
 */
export type Region = $Result.DefaultSelection<Prisma.$RegionPayload>
/**
 * Model Audit_Logs
 * 
 */
export type Audit_Logs = $Result.DefaultSelection<Prisma.$Audit_LogsPayload>
/**
 * Model Files
 * 
 */
export type Files = $Result.DefaultSelection<Prisma.$FilesPayload>
/**
 * Model Permissions
 * 
 */
export type Permissions = $Result.DefaultSelection<Prisma.$PermissionsPayload>
/**
 * Model Roles_Permissions
 * 
 */
export type Roles_Permissions = $Result.DefaultSelection<Prisma.$Roles_PermissionsPayload>
/**
 * Model Users_Roles
 * 
 */
export type Users_Roles = $Result.DefaultSelection<Prisma.$Users_RolesPayload>
/**
 * Model Contracts
 * 
 */
export type Contracts = $Result.DefaultSelection<Prisma.$ContractsPayload>
/**
 * Model Import_History
 * 
 */
export type Import_History = $Result.DefaultSelection<Prisma.$Import_HistoryPayload>
/**
 * Model Customer_Care_Notes
 * 
 */
export type Customer_Care_Notes = $Result.DefaultSelection<Prisma.$Customer_Care_NotesPayload>
/**
 * Model Contract_Renewals
 * 
 */
export type Contract_Renewals = $Result.DefaultSelection<Prisma.$Contract_RenewalsPayload>
/**
 * Model System_Settings
 * 
 */
export type System_Settings = $Result.DefaultSelection<Prisma.$System_SettingsPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Roles
 * const roles = await prisma.role.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Roles
   * const roles = await prisma.role.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.role`: Exposes CRUD operations for the **Role** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles
    * const roles = await prisma.role.findMany()
    * ```
    */
  get role(): Prisma.RoleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.region`: Exposes CRUD operations for the **Region** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Regions
    * const regions = await prisma.region.findMany()
    * ```
    */
  get region(): Prisma.RegionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.audit_Logs`: Exposes CRUD operations for the **Audit_Logs** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Audit_Logs
    * const audit_Logs = await prisma.audit_Logs.findMany()
    * ```
    */
  get audit_Logs(): Prisma.Audit_LogsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.files`: Exposes CRUD operations for the **Files** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Files
    * const files = await prisma.files.findMany()
    * ```
    */
  get files(): Prisma.FilesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.permissions`: Exposes CRUD operations for the **Permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Permissions
    * const permissions = await prisma.permissions.findMany()
    * ```
    */
  get permissions(): Prisma.PermissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.roles_Permissions`: Exposes CRUD operations for the **Roles_Permissions** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Roles_Permissions
    * const roles_Permissions = await prisma.roles_Permissions.findMany()
    * ```
    */
  get roles_Permissions(): Prisma.Roles_PermissionsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.users_Roles`: Exposes CRUD operations for the **Users_Roles** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users_Roles
    * const users_Roles = await prisma.users_Roles.findMany()
    * ```
    */
  get users_Roles(): Prisma.Users_RolesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contracts`: Exposes CRUD operations for the **Contracts** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contracts
    * const contracts = await prisma.contracts.findMany()
    * ```
    */
  get contracts(): Prisma.ContractsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.import_History`: Exposes CRUD operations for the **Import_History** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Import_Histories
    * const import_Histories = await prisma.import_History.findMany()
    * ```
    */
  get import_History(): Prisma.Import_HistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer_Care_Notes`: Exposes CRUD operations for the **Customer_Care_Notes** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customer_Care_Notes
    * const customer_Care_Notes = await prisma.customer_Care_Notes.findMany()
    * ```
    */
  get customer_Care_Notes(): Prisma.Customer_Care_NotesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.contract_Renewals`: Exposes CRUD operations for the **Contract_Renewals** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Contract_Renewals
    * const contract_Renewals = await prisma.contract_Renewals.findMany()
    * ```
    */
  get contract_Renewals(): Prisma.Contract_RenewalsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.system_Settings`: Exposes CRUD operations for the **System_Settings** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more System_Settings
    * const system_Settings = await prisma.system_Settings.findMany()
    * ```
    */
  get system_Settings(): Prisma.System_SettingsDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.4.2
   * Query Engine version: 94a226be1cf2967af2541cca5529f0f7ba866919
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Role: 'Role',
    User: 'User',
    Region: 'Region',
    Audit_Logs: 'Audit_Logs',
    Files: 'Files',
    Permissions: 'Permissions',
    Roles_Permissions: 'Roles_Permissions',
    Users_Roles: 'Users_Roles',
    Contracts: 'Contracts',
    Import_History: 'Import_History',
    Customer_Care_Notes: 'Customer_Care_Notes',
    Contract_Renewals: 'Contract_Renewals',
    System_Settings: 'System_Settings'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "role" | "user" | "region" | "audit_Logs" | "files" | "permissions" | "roles_Permissions" | "users_Roles" | "contracts" | "import_History" | "customer_Care_Notes" | "contract_Renewals" | "system_Settings"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Role: {
        payload: Prisma.$RolePayload<ExtArgs>
        fields: Prisma.RoleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RoleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RoleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findFirst: {
            args: Prisma.RoleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RoleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          findMany: {
            args: Prisma.RoleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          create: {
            args: Prisma.RoleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          createMany: {
            args: Prisma.RoleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RoleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          delete: {
            args: Prisma.RoleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          update: {
            args: Prisma.RoleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          deleteMany: {
            args: Prisma.RoleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RoleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RoleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>[]
          }
          upsert: {
            args: Prisma.RoleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RolePayload>
          }
          aggregate: {
            args: Prisma.RoleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRole>
          }
          groupBy: {
            args: Prisma.RoleGroupByArgs<ExtArgs>
            result: $Utils.Optional<RoleGroupByOutputType>[]
          }
          count: {
            args: Prisma.RoleCountArgs<ExtArgs>
            result: $Utils.Optional<RoleCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Region: {
        payload: Prisma.$RegionPayload<ExtArgs>
        fields: Prisma.RegionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RegionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RegionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findFirst: {
            args: Prisma.RegionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RegionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          findMany: {
            args: Prisma.RegionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          create: {
            args: Prisma.RegionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          createMany: {
            args: Prisma.RegionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RegionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          delete: {
            args: Prisma.RegionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          update: {
            args: Prisma.RegionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          deleteMany: {
            args: Prisma.RegionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RegionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RegionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>[]
          }
          upsert: {
            args: Prisma.RegionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RegionPayload>
          }
          aggregate: {
            args: Prisma.RegionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRegion>
          }
          groupBy: {
            args: Prisma.RegionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RegionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RegionCountArgs<ExtArgs>
            result: $Utils.Optional<RegionCountAggregateOutputType> | number
          }
        }
      }
      Audit_Logs: {
        payload: Prisma.$Audit_LogsPayload<ExtArgs>
        fields: Prisma.Audit_LogsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Audit_LogsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Audit_LogsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>
          }
          findFirst: {
            args: Prisma.Audit_LogsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Audit_LogsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>
          }
          findMany: {
            args: Prisma.Audit_LogsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>[]
          }
          create: {
            args: Prisma.Audit_LogsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>
          }
          createMany: {
            args: Prisma.Audit_LogsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Audit_LogsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>[]
          }
          delete: {
            args: Prisma.Audit_LogsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>
          }
          update: {
            args: Prisma.Audit_LogsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>
          }
          deleteMany: {
            args: Prisma.Audit_LogsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Audit_LogsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Audit_LogsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>[]
          }
          upsert: {
            args: Prisma.Audit_LogsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Audit_LogsPayload>
          }
          aggregate: {
            args: Prisma.Audit_LogsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAudit_Logs>
          }
          groupBy: {
            args: Prisma.Audit_LogsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Audit_LogsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Audit_LogsCountArgs<ExtArgs>
            result: $Utils.Optional<Audit_LogsCountAggregateOutputType> | number
          }
        }
      }
      Files: {
        payload: Prisma.$FilesPayload<ExtArgs>
        fields: Prisma.FilesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FilesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FilesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findFirst: {
            args: Prisma.FilesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FilesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          findMany: {
            args: Prisma.FilesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          create: {
            args: Prisma.FilesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          createMany: {
            args: Prisma.FilesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FilesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          delete: {
            args: Prisma.FilesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          update: {
            args: Prisma.FilesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          deleteMany: {
            args: Prisma.FilesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FilesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FilesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>[]
          }
          upsert: {
            args: Prisma.FilesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FilesPayload>
          }
          aggregate: {
            args: Prisma.FilesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFiles>
          }
          groupBy: {
            args: Prisma.FilesGroupByArgs<ExtArgs>
            result: $Utils.Optional<FilesGroupByOutputType>[]
          }
          count: {
            args: Prisma.FilesCountArgs<ExtArgs>
            result: $Utils.Optional<FilesCountAggregateOutputType> | number
          }
        }
      }
      Permissions: {
        payload: Prisma.$PermissionsPayload<ExtArgs>
        fields: Prisma.PermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          findFirst: {
            args: Prisma.PermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          findMany: {
            args: Prisma.PermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>[]
          }
          create: {
            args: Prisma.PermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          createMany: {
            args: Prisma.PermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PermissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>[]
          }
          delete: {
            args: Prisma.PermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          update: {
            args: Prisma.PermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          deleteMany: {
            args: Prisma.PermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PermissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>[]
          }
          upsert: {
            args: Prisma.PermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PermissionsPayload>
          }
          aggregate: {
            args: Prisma.PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePermissions>
          }
          groupBy: {
            args: Prisma.PermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.PermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<PermissionsCountAggregateOutputType> | number
          }
        }
      }
      Roles_Permissions: {
        payload: Prisma.$Roles_PermissionsPayload<ExtArgs>
        fields: Prisma.Roles_PermissionsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Roles_PermissionsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Roles_PermissionsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>
          }
          findFirst: {
            args: Prisma.Roles_PermissionsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Roles_PermissionsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>
          }
          findMany: {
            args: Prisma.Roles_PermissionsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>[]
          }
          create: {
            args: Prisma.Roles_PermissionsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>
          }
          createMany: {
            args: Prisma.Roles_PermissionsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Roles_PermissionsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>[]
          }
          delete: {
            args: Prisma.Roles_PermissionsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>
          }
          update: {
            args: Prisma.Roles_PermissionsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>
          }
          deleteMany: {
            args: Prisma.Roles_PermissionsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Roles_PermissionsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Roles_PermissionsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>[]
          }
          upsert: {
            args: Prisma.Roles_PermissionsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Roles_PermissionsPayload>
          }
          aggregate: {
            args: Prisma.Roles_PermissionsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRoles_Permissions>
          }
          groupBy: {
            args: Prisma.Roles_PermissionsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Roles_PermissionsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Roles_PermissionsCountArgs<ExtArgs>
            result: $Utils.Optional<Roles_PermissionsCountAggregateOutputType> | number
          }
        }
      }
      Users_Roles: {
        payload: Prisma.$Users_RolesPayload<ExtArgs>
        fields: Prisma.Users_RolesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Users_RolesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Users_RolesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>
          }
          findFirst: {
            args: Prisma.Users_RolesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Users_RolesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>
          }
          findMany: {
            args: Prisma.Users_RolesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>[]
          }
          create: {
            args: Prisma.Users_RolesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>
          }
          createMany: {
            args: Prisma.Users_RolesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Users_RolesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>[]
          }
          delete: {
            args: Prisma.Users_RolesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>
          }
          update: {
            args: Prisma.Users_RolesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>
          }
          deleteMany: {
            args: Prisma.Users_RolesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Users_RolesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Users_RolesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>[]
          }
          upsert: {
            args: Prisma.Users_RolesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Users_RolesPayload>
          }
          aggregate: {
            args: Prisma.Users_RolesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUsers_Roles>
          }
          groupBy: {
            args: Prisma.Users_RolesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Users_RolesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Users_RolesCountArgs<ExtArgs>
            result: $Utils.Optional<Users_RolesCountAggregateOutputType> | number
          }
        }
      }
      Contracts: {
        payload: Prisma.$ContractsPayload<ExtArgs>
        fields: Prisma.ContractsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ContractsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ContractsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          findFirst: {
            args: Prisma.ContractsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ContractsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          findMany: {
            args: Prisma.ContractsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>[]
          }
          create: {
            args: Prisma.ContractsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          createMany: {
            args: Prisma.ContractsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ContractsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>[]
          }
          delete: {
            args: Prisma.ContractsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          update: {
            args: Prisma.ContractsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          deleteMany: {
            args: Prisma.ContractsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ContractsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ContractsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>[]
          }
          upsert: {
            args: Prisma.ContractsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ContractsPayload>
          }
          aggregate: {
            args: Prisma.ContractsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContracts>
          }
          groupBy: {
            args: Prisma.ContractsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ContractsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ContractsCountArgs<ExtArgs>
            result: $Utils.Optional<ContractsCountAggregateOutputType> | number
          }
        }
      }
      Import_History: {
        payload: Prisma.$Import_HistoryPayload<ExtArgs>
        fields: Prisma.Import_HistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Import_HistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Import_HistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>
          }
          findFirst: {
            args: Prisma.Import_HistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Import_HistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>
          }
          findMany: {
            args: Prisma.Import_HistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>[]
          }
          create: {
            args: Prisma.Import_HistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>
          }
          createMany: {
            args: Prisma.Import_HistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Import_HistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>[]
          }
          delete: {
            args: Prisma.Import_HistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>
          }
          update: {
            args: Prisma.Import_HistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>
          }
          deleteMany: {
            args: Prisma.Import_HistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Import_HistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Import_HistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>[]
          }
          upsert: {
            args: Prisma.Import_HistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Import_HistoryPayload>
          }
          aggregate: {
            args: Prisma.Import_HistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateImport_History>
          }
          groupBy: {
            args: Prisma.Import_HistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<Import_HistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.Import_HistoryCountArgs<ExtArgs>
            result: $Utils.Optional<Import_HistoryCountAggregateOutputType> | number
          }
        }
      }
      Customer_Care_Notes: {
        payload: Prisma.$Customer_Care_NotesPayload<ExtArgs>
        fields: Prisma.Customer_Care_NotesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Customer_Care_NotesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Customer_Care_NotesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>
          }
          findFirst: {
            args: Prisma.Customer_Care_NotesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Customer_Care_NotesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>
          }
          findMany: {
            args: Prisma.Customer_Care_NotesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>[]
          }
          create: {
            args: Prisma.Customer_Care_NotesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>
          }
          createMany: {
            args: Prisma.Customer_Care_NotesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Customer_Care_NotesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>[]
          }
          delete: {
            args: Prisma.Customer_Care_NotesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>
          }
          update: {
            args: Prisma.Customer_Care_NotesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>
          }
          deleteMany: {
            args: Prisma.Customer_Care_NotesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Customer_Care_NotesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Customer_Care_NotesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>[]
          }
          upsert: {
            args: Prisma.Customer_Care_NotesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Customer_Care_NotesPayload>
          }
          aggregate: {
            args: Prisma.Customer_Care_NotesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer_Care_Notes>
          }
          groupBy: {
            args: Prisma.Customer_Care_NotesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Customer_Care_NotesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Customer_Care_NotesCountArgs<ExtArgs>
            result: $Utils.Optional<Customer_Care_NotesCountAggregateOutputType> | number
          }
        }
      }
      Contract_Renewals: {
        payload: Prisma.$Contract_RenewalsPayload<ExtArgs>
        fields: Prisma.Contract_RenewalsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Contract_RenewalsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Contract_RenewalsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>
          }
          findFirst: {
            args: Prisma.Contract_RenewalsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Contract_RenewalsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>
          }
          findMany: {
            args: Prisma.Contract_RenewalsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>[]
          }
          create: {
            args: Prisma.Contract_RenewalsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>
          }
          createMany: {
            args: Prisma.Contract_RenewalsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Contract_RenewalsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>[]
          }
          delete: {
            args: Prisma.Contract_RenewalsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>
          }
          update: {
            args: Prisma.Contract_RenewalsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>
          }
          deleteMany: {
            args: Prisma.Contract_RenewalsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Contract_RenewalsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Contract_RenewalsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>[]
          }
          upsert: {
            args: Prisma.Contract_RenewalsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Contract_RenewalsPayload>
          }
          aggregate: {
            args: Prisma.Contract_RenewalsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateContract_Renewals>
          }
          groupBy: {
            args: Prisma.Contract_RenewalsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Contract_RenewalsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Contract_RenewalsCountArgs<ExtArgs>
            result: $Utils.Optional<Contract_RenewalsCountAggregateOutputType> | number
          }
        }
      }
      System_Settings: {
        payload: Prisma.$System_SettingsPayload<ExtArgs>
        fields: Prisma.System_SettingsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.System_SettingsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.System_SettingsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>
          }
          findFirst: {
            args: Prisma.System_SettingsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.System_SettingsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>
          }
          findMany: {
            args: Prisma.System_SettingsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>[]
          }
          create: {
            args: Prisma.System_SettingsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>
          }
          createMany: {
            args: Prisma.System_SettingsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.System_SettingsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>[]
          }
          delete: {
            args: Prisma.System_SettingsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>
          }
          update: {
            args: Prisma.System_SettingsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>
          }
          deleteMany: {
            args: Prisma.System_SettingsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.System_SettingsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.System_SettingsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>[]
          }
          upsert: {
            args: Prisma.System_SettingsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$System_SettingsPayload>
          }
          aggregate: {
            args: Prisma.System_SettingsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSystem_Settings>
          }
          groupBy: {
            args: Prisma.System_SettingsGroupByArgs<ExtArgs>
            result: $Utils.Optional<System_SettingsGroupByOutputType>[]
          }
          count: {
            args: Prisma.System_SettingsCountArgs<ExtArgs>
            result: $Utils.Optional<System_SettingsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    role?: RoleOmit
    user?: UserOmit
    region?: RegionOmit
    audit_Logs?: Audit_LogsOmit
    files?: FilesOmit
    permissions?: PermissionsOmit
    roles_Permissions?: Roles_PermissionsOmit
    users_Roles?: Users_RolesOmit
    contracts?: ContractsOmit
    import_History?: Import_HistoryOmit
    customer_Care_Notes?: Customer_Care_NotesOmit
    contract_Renewals?: Contract_RenewalsOmit
    system_Settings?: System_SettingsOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type RoleCountOutputType
   */

  export type RoleCountOutputType = {
    users: number
    rolesPermissions: number
    usersRoles: number
  }

  export type RoleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RoleCountOutputTypeCountUsersArgs
    rolesPermissions?: boolean | RoleCountOutputTypeCountRolesPermissionsArgs
    usersRoles?: boolean | RoleCountOutputTypeCountUsersRolesArgs
  }

  // Custom InputTypes
  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RoleCountOutputType
     */
    select?: RoleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountRolesPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Roles_PermissionsWhereInput
  }

  /**
   * RoleCountOutputType without action
   */
  export type RoleCountOutputTypeCountUsersRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_RolesWhereInput
  }


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    seniorDeptSubs: number
    deptSubs: number
    directSubs: number
    contracts: number
    auditLogs: number
    files: number
    usersRoles: number
    importHistories: number
    cskhNotes: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seniorDeptSubs?: boolean | UserCountOutputTypeCountSeniorDeptSubsArgs
    deptSubs?: boolean | UserCountOutputTypeCountDeptSubsArgs
    directSubs?: boolean | UserCountOutputTypeCountDirectSubsArgs
    contracts?: boolean | UserCountOutputTypeCountContractsArgs
    auditLogs?: boolean | UserCountOutputTypeCountAuditLogsArgs
    files?: boolean | UserCountOutputTypeCountFilesArgs
    usersRoles?: boolean | UserCountOutputTypeCountUsersRolesArgs
    importHistories?: boolean | UserCountOutputTypeCountImportHistoriesArgs
    cskhNotes?: boolean | UserCountOutputTypeCountCskhNotesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSeniorDeptSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeptSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDirectSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountContractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAuditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Audit_LogsWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUsersRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_RolesWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountImportHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Import_HistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCskhNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Customer_Care_NotesWhereInput
  }


  /**
   * Count Type RegionCountOutputType
   */

  export type RegionCountOutputType = {
    users: number
  }

  export type RegionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | RegionCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RegionCountOutputType
     */
    select?: RegionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * RegionCountOutputType without action
   */
  export type RegionCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type PermissionsCountOutputType
   */

  export type PermissionsCountOutputType = {
    rolesPermissions: number
  }

  export type PermissionsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesPermissions?: boolean | PermissionsCountOutputTypeCountRolesPermissionsArgs
  }

  // Custom InputTypes
  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PermissionsCountOutputType
     */
    select?: PermissionsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PermissionsCountOutputType without action
   */
  export type PermissionsCountOutputTypeCountRolesPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Roles_PermissionsWhereInput
  }


  /**
   * Count Type ContractsCountOutputType
   */

  export type ContractsCountOutputType = {
    renewals: number
    cskhNotes: number
    files: number
  }

  export type ContractsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    renewals?: boolean | ContractsCountOutputTypeCountRenewalsArgs
    cskhNotes?: boolean | ContractsCountOutputTypeCountCskhNotesArgs
    files?: boolean | ContractsCountOutputTypeCountFilesArgs
  }

  // Custom InputTypes
  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ContractsCountOutputType
     */
    select?: ContractsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeCountRenewalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Contract_RenewalsWhereInput
  }

  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeCountCskhNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Customer_Care_NotesWhereInput
  }

  /**
   * ContractsCountOutputType without action
   */
  export type ContractsCountOutputTypeCountFilesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Role
   */

  export type AggregateRole = {
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  export type RoleMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    is_active: boolean | null
  }

  export type RoleMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    description: string | null
    is_active: boolean | null
  }

  export type RoleCountAggregateOutputType = {
    id: number
    code: number
    name: number
    description: number
    is_active: number
    _all: number
  }


  export type RoleMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    is_active?: true
  }

  export type RoleMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    is_active?: true
  }

  export type RoleCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    description?: true
    is_active?: true
    _all?: true
  }

  export type RoleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Role to aggregate.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles
    **/
    _count?: true | RoleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RoleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RoleMaxAggregateInputType
  }

  export type GetRoleAggregateType<T extends RoleAggregateArgs> = {
        [P in keyof T & keyof AggregateRole]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRole[P]>
      : GetScalarType<T[P], AggregateRole[P]>
  }




  export type RoleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RoleWhereInput
    orderBy?: RoleOrderByWithAggregationInput | RoleOrderByWithAggregationInput[]
    by: RoleScalarFieldEnum[] | RoleScalarFieldEnum
    having?: RoleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RoleCountAggregateInputType | true
    _min?: RoleMinAggregateInputType
    _max?: RoleMaxAggregateInputType
  }

  export type RoleGroupByOutputType = {
    id: string
    code: string
    name: string
    description: string | null
    is_active: boolean
    _count: RoleCountAggregateOutputType | null
    _min: RoleMinAggregateOutputType | null
    _max: RoleMaxAggregateOutputType | null
  }

  type GetRoleGroupByPayload<T extends RoleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RoleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RoleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RoleGroupByOutputType[P]>
            : GetScalarType<T[P], RoleGroupByOutputType[P]>
        }
      >
    >


  export type RoleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
    users?: boolean | Role$usersArgs<ExtArgs>
    rolesPermissions?: boolean | Role$rolesPermissionsArgs<ExtArgs>
    usersRoles?: boolean | Role$usersRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["role"]>

  export type RoleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
  }, ExtArgs["result"]["role"]>

  export type RoleSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    description?: boolean
    is_active?: boolean
  }

  export type RoleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "description" | "is_active", ExtArgs["result"]["role"]>
  export type RoleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Role$usersArgs<ExtArgs>
    rolesPermissions?: boolean | Role$rolesPermissionsArgs<ExtArgs>
    usersRoles?: boolean | Role$usersRolesArgs<ExtArgs>
    _count?: boolean | RoleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RoleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RoleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RolePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Role"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      rolesPermissions: Prisma.$Roles_PermissionsPayload<ExtArgs>[]
      usersRoles: Prisma.$Users_RolesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      description: string | null
      is_active: boolean
    }, ExtArgs["result"]["role"]>
    composites: {}
  }

  type RoleGetPayload<S extends boolean | null | undefined | RoleDefaultArgs> = $Result.GetResult<Prisma.$RolePayload, S>

  type RoleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RoleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RoleCountAggregateInputType | true
    }

  export interface RoleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Role'], meta: { name: 'Role' } }
    /**
     * Find zero or one Role that matches the filter.
     * @param {RoleFindUniqueArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RoleFindUniqueArgs>(args: SelectSubset<T, RoleFindUniqueArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Role that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RoleFindUniqueOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RoleFindUniqueOrThrowArgs>(args: SelectSubset<T, RoleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RoleFindFirstArgs>(args?: SelectSubset<T, RoleFindFirstArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Role that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindFirstOrThrowArgs} args - Arguments to find a Role
     * @example
     * // Get one Role
     * const role = await prisma.role.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RoleFindFirstOrThrowArgs>(args?: SelectSubset<T, RoleFindFirstOrThrowArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles
     * const roles = await prisma.role.findMany()
     * 
     * // Get first 10 Roles
     * const roles = await prisma.role.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const roleWithIdOnly = await prisma.role.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RoleFindManyArgs>(args?: SelectSubset<T, RoleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Role.
     * @param {RoleCreateArgs} args - Arguments to create a Role.
     * @example
     * // Create one Role
     * const Role = await prisma.role.create({
     *   data: {
     *     // ... data to create a Role
     *   }
     * })
     * 
     */
    create<T extends RoleCreateArgs>(args: SelectSubset<T, RoleCreateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles.
     * @param {RoleCreateManyArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RoleCreateManyArgs>(args?: SelectSubset<T, RoleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles and returns the data saved in the database.
     * @param {RoleCreateManyAndReturnArgs} args - Arguments to create many Roles.
     * @example
     * // Create many Roles
     * const role = await prisma.role.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RoleCreateManyAndReturnArgs>(args?: SelectSubset<T, RoleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Role.
     * @param {RoleDeleteArgs} args - Arguments to delete one Role.
     * @example
     * // Delete one Role
     * const Role = await prisma.role.delete({
     *   where: {
     *     // ... filter to delete one Role
     *   }
     * })
     * 
     */
    delete<T extends RoleDeleteArgs>(args: SelectSubset<T, RoleDeleteArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Role.
     * @param {RoleUpdateArgs} args - Arguments to update one Role.
     * @example
     * // Update one Role
     * const role = await prisma.role.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RoleUpdateArgs>(args: SelectSubset<T, RoleUpdateArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles.
     * @param {RoleDeleteManyArgs} args - Arguments to filter Roles to delete.
     * @example
     * // Delete a few Roles
     * const { count } = await prisma.role.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RoleDeleteManyArgs>(args?: SelectSubset<T, RoleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RoleUpdateManyArgs>(args: SelectSubset<T, RoleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles and returns the data updated in the database.
     * @param {RoleUpdateManyAndReturnArgs} args - Arguments to update many Roles.
     * @example
     * // Update many Roles
     * const role = await prisma.role.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles and only return the `id`
     * const roleWithIdOnly = await prisma.role.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RoleUpdateManyAndReturnArgs>(args: SelectSubset<T, RoleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Role.
     * @param {RoleUpsertArgs} args - Arguments to update or create a Role.
     * @example
     * // Update or create a Role
     * const role = await prisma.role.upsert({
     *   create: {
     *     // ... data to create a Role
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Role we want to update
     *   }
     * })
     */
    upsert<T extends RoleUpsertArgs>(args: SelectSubset<T, RoleUpsertArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleCountArgs} args - Arguments to filter Roles to count.
     * @example
     * // Count the number of Roles
     * const count = await prisma.role.count({
     *   where: {
     *     // ... the filter for the Roles we want to count
     *   }
     * })
    **/
    count<T extends RoleCountArgs>(
      args?: Subset<T, RoleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RoleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RoleAggregateArgs>(args: Subset<T, RoleAggregateArgs>): Prisma.PrismaPromise<GetRoleAggregateType<T>>

    /**
     * Group by Role.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RoleGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RoleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RoleGroupByArgs['orderBy'] }
        : { orderBy?: RoleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RoleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Role model
   */
  readonly fields: RoleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Role.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RoleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Role$usersArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rolesPermissions<T extends Role$rolesPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Role$rolesPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usersRoles<T extends Role$usersRolesArgs<ExtArgs> = {}>(args?: Subset<T, Role$usersRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Role model
   */
  interface RoleFieldRefs {
    readonly id: FieldRef<"Role", 'String'>
    readonly code: FieldRef<"Role", 'String'>
    readonly name: FieldRef<"Role", 'String'>
    readonly description: FieldRef<"Role", 'String'>
    readonly is_active: FieldRef<"Role", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Role findUnique
   */
  export type RoleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findUniqueOrThrow
   */
  export type RoleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role findFirst
   */
  export type RoleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findFirstOrThrow
   */
  export type RoleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Role to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles.
     */
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role findMany
   */
  export type RoleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter, which Roles to fetch.
     */
    where?: RoleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles to fetch.
     */
    orderBy?: RoleOrderByWithRelationInput | RoleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles.
     */
    cursor?: RoleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles.
     */
    skip?: number
    distinct?: RoleScalarFieldEnum | RoleScalarFieldEnum[]
  }

  /**
   * Role create
   */
  export type RoleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to create a Role.
     */
    data: XOR<RoleCreateInput, RoleUncheckedCreateInput>
  }

  /**
   * Role createMany
   */
  export type RoleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role createManyAndReturn
   */
  export type RoleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to create many Roles.
     */
    data: RoleCreateManyInput | RoleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Role update
   */
  export type RoleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The data needed to update a Role.
     */
    data: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
    /**
     * Choose, which Role to update.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role updateMany
   */
  export type RoleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role updateManyAndReturn
   */
  export type RoleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * The data used to update Roles.
     */
    data: XOR<RoleUpdateManyMutationInput, RoleUncheckedUpdateManyInput>
    /**
     * Filter which Roles to update
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to update.
     */
    limit?: number
  }

  /**
   * Role upsert
   */
  export type RoleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * The filter to search for the Role to update in case it exists.
     */
    where: RoleWhereUniqueInput
    /**
     * In case the Role found by the `where` argument doesn't exist, create a new Role with this data.
     */
    create: XOR<RoleCreateInput, RoleUncheckedCreateInput>
    /**
     * In case the Role was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RoleUpdateInput, RoleUncheckedUpdateInput>
  }

  /**
   * Role delete
   */
  export type RoleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
    /**
     * Filter which Role to delete.
     */
    where: RoleWhereUniqueInput
  }

  /**
   * Role deleteMany
   */
  export type RoleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles to delete
     */
    where?: RoleWhereInput
    /**
     * Limit how many Roles to delete.
     */
    limit?: number
  }

  /**
   * Role.users
   */
  export type Role$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Role.rolesPermissions
   */
  export type Role$rolesPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    where?: Roles_PermissionsWhereInput
    orderBy?: Roles_PermissionsOrderByWithRelationInput | Roles_PermissionsOrderByWithRelationInput[]
    cursor?: Roles_PermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Roles_PermissionsScalarFieldEnum | Roles_PermissionsScalarFieldEnum[]
  }

  /**
   * Role.usersRoles
   */
  export type Role$usersRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    where?: Users_RolesWhereInput
    orderBy?: Users_RolesOrderByWithRelationInput | Users_RolesOrderByWithRelationInput[]
    cursor?: Users_RolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_RolesScalarFieldEnum | Users_RolesScalarFieldEnum[]
  }

  /**
   * Role without action
   */
  export type RoleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Role
     */
    select?: RoleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Role
     */
    omit?: RoleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RoleInclude<ExtArgs> | null
  }


  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    employeeCode: string | null
    fullName: string | null
    password: string | null
    email: string | null
    gender: string | null
    dob: Date | null
    address: string | null
    account_type: string | null
    phone: string | null
    joinDate: Date | null
    leaveDate: Date | null
    isActive: boolean | null
    regionCode: string | null
    seniorDeptManagerId: string | null
    deptManagerId: string | null
    managerId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    employeeCode: string | null
    fullName: string | null
    password: string | null
    email: string | null
    gender: string | null
    dob: Date | null
    address: string | null
    account_type: string | null
    phone: string | null
    joinDate: Date | null
    leaveDate: Date | null
    isActive: boolean | null
    regionCode: string | null
    seniorDeptManagerId: string | null
    deptManagerId: string | null
    managerId: string | null
    roleId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    employeeCode: number
    fullName: number
    password: number
    email: number
    gender: number
    dob: number
    address: number
    account_type: number
    phone: number
    joinDate: number
    leaveDate: number
    isActive: number
    regionCode: number
    seniorDeptManagerId: number
    deptManagerId: number
    managerId: number
    roleId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    employeeCode?: true
    fullName?: true
    password?: true
    email?: true
    gender?: true
    dob?: true
    address?: true
    account_type?: true
    phone?: true
    joinDate?: true
    leaveDate?: true
    isActive?: true
    regionCode?: true
    seniorDeptManagerId?: true
    deptManagerId?: true
    managerId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    employeeCode?: true
    fullName?: true
    password?: true
    email?: true
    gender?: true
    dob?: true
    address?: true
    account_type?: true
    phone?: true
    joinDate?: true
    leaveDate?: true
    isActive?: true
    regionCode?: true
    seniorDeptManagerId?: true
    deptManagerId?: true
    managerId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    employeeCode?: true
    fullName?: true
    password?: true
    email?: true
    gender?: true
    dob?: true
    address?: true
    account_type?: true
    phone?: true
    joinDate?: true
    leaveDate?: true
    isActive?: true
    regionCode?: true
    seniorDeptManagerId?: true
    deptManagerId?: true
    managerId?: true
    roleId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    employeeCode: string | null
    fullName: string
    password: string
    email: string | null
    gender: string | null
    dob: Date | null
    address: string | null
    account_type: string
    phone: string | null
    joinDate: Date | null
    leaveDate: Date | null
    isActive: boolean
    regionCode: string | null
    seniorDeptManagerId: string | null
    deptManagerId: string | null
    managerId: string | null
    roleId: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeCode?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    address?: boolean
    account_type?: boolean
    phone?: boolean
    joinDate?: boolean
    leaveDate?: boolean
    isActive?: boolean
    regionCode?: boolean
    seniorDeptManagerId?: boolean
    deptManagerId?: boolean
    managerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | User$regionArgs<ExtArgs>
    seniorDeptManager?: boolean | User$seniorDeptManagerArgs<ExtArgs>
    seniorDeptSubs?: boolean | User$seniorDeptSubsArgs<ExtArgs>
    deptManager?: boolean | User$deptManagerArgs<ExtArgs>
    deptSubs?: boolean | User$deptSubsArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    directSubs?: boolean | User$directSubsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    contracts?: boolean | User$contractsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    usersRoles?: boolean | User$usersRolesArgs<ExtArgs>
    importHistories?: boolean | User$importHistoriesArgs<ExtArgs>
    cskhNotes?: boolean | User$cskhNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeCode?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    address?: boolean
    account_type?: boolean
    phone?: boolean
    joinDate?: boolean
    leaveDate?: boolean
    isActive?: boolean
    regionCode?: boolean
    seniorDeptManagerId?: boolean
    deptManagerId?: boolean
    managerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | User$regionArgs<ExtArgs>
    seniorDeptManager?: boolean | User$seniorDeptManagerArgs<ExtArgs>
    deptManager?: boolean | User$deptManagerArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    employeeCode?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    address?: boolean
    account_type?: boolean
    phone?: boolean
    joinDate?: boolean
    leaveDate?: boolean
    isActive?: boolean
    regionCode?: boolean
    seniorDeptManagerId?: boolean
    deptManagerId?: boolean
    managerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    region?: boolean | User$regionArgs<ExtArgs>
    seniorDeptManager?: boolean | User$seniorDeptManagerArgs<ExtArgs>
    deptManager?: boolean | User$deptManagerArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    employeeCode?: boolean
    fullName?: boolean
    password?: boolean
    email?: boolean
    gender?: boolean
    dob?: boolean
    address?: boolean
    account_type?: boolean
    phone?: boolean
    joinDate?: boolean
    leaveDate?: boolean
    isActive?: boolean
    regionCode?: boolean
    seniorDeptManagerId?: boolean
    deptManagerId?: boolean
    managerId?: boolean
    roleId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "employeeCode" | "fullName" | "password" | "email" | "gender" | "dob" | "address" | "account_type" | "phone" | "joinDate" | "leaveDate" | "isActive" | "regionCode" | "seniorDeptManagerId" | "deptManagerId" | "managerId" | "roleId" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | User$regionArgs<ExtArgs>
    seniorDeptManager?: boolean | User$seniorDeptManagerArgs<ExtArgs>
    seniorDeptSubs?: boolean | User$seniorDeptSubsArgs<ExtArgs>
    deptManager?: boolean | User$deptManagerArgs<ExtArgs>
    deptSubs?: boolean | User$deptSubsArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    directSubs?: boolean | User$directSubsArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
    contracts?: boolean | User$contractsArgs<ExtArgs>
    auditLogs?: boolean | User$auditLogsArgs<ExtArgs>
    files?: boolean | User$filesArgs<ExtArgs>
    usersRoles?: boolean | User$usersRolesArgs<ExtArgs>
    importHistories?: boolean | User$importHistoriesArgs<ExtArgs>
    cskhNotes?: boolean | User$cskhNotesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | User$regionArgs<ExtArgs>
    seniorDeptManager?: boolean | User$seniorDeptManagerArgs<ExtArgs>
    deptManager?: boolean | User$deptManagerArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    region?: boolean | User$regionArgs<ExtArgs>
    seniorDeptManager?: boolean | User$seniorDeptManagerArgs<ExtArgs>
    deptManager?: boolean | User$deptManagerArgs<ExtArgs>
    manager?: boolean | User$managerArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      region: Prisma.$RegionPayload<ExtArgs> | null
      seniorDeptManager: Prisma.$UserPayload<ExtArgs> | null
      seniorDeptSubs: Prisma.$UserPayload<ExtArgs>[]
      deptManager: Prisma.$UserPayload<ExtArgs> | null
      deptSubs: Prisma.$UserPayload<ExtArgs>[]
      manager: Prisma.$UserPayload<ExtArgs> | null
      directSubs: Prisma.$UserPayload<ExtArgs>[]
      role: Prisma.$RolePayload<ExtArgs>
      contracts: Prisma.$ContractsPayload<ExtArgs>[]
      auditLogs: Prisma.$Audit_LogsPayload<ExtArgs>[]
      files: Prisma.$FilesPayload<ExtArgs>[]
      usersRoles: Prisma.$Users_RolesPayload<ExtArgs>[]
      importHistories: Prisma.$Import_HistoryPayload<ExtArgs>[]
      cskhNotes: Prisma.$Customer_Care_NotesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      employeeCode: string | null
      fullName: string
      password: string
      email: string | null
      gender: string | null
      dob: Date | null
      address: string | null
      account_type: string
      phone: string | null
      joinDate: Date | null
      leaveDate: Date | null
      isActive: boolean
      regionCode: string | null
      seniorDeptManagerId: string | null
      deptManagerId: string | null
      managerId: string | null
      roleId: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    region<T extends User$regionArgs<ExtArgs> = {}>(args?: Subset<T, User$regionArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seniorDeptManager<T extends User$seniorDeptManagerArgs<ExtArgs> = {}>(args?: Subset<T, User$seniorDeptManagerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    seniorDeptSubs<T extends User$seniorDeptSubsArgs<ExtArgs> = {}>(args?: Subset<T, User$seniorDeptSubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deptManager<T extends User$deptManagerArgs<ExtArgs> = {}>(args?: Subset<T, User$deptManagerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deptSubs<T extends User$deptSubsArgs<ExtArgs> = {}>(args?: Subset<T, User$deptSubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    manager<T extends User$managerArgs<ExtArgs> = {}>(args?: Subset<T, User$managerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    directSubs<T extends User$directSubsArgs<ExtArgs> = {}>(args?: Subset<T, User$directSubsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    contracts<T extends User$contractsArgs<ExtArgs> = {}>(args?: Subset<T, User$contractsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    auditLogs<T extends User$auditLogsArgs<ExtArgs> = {}>(args?: Subset<T, User$auditLogsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends User$filesArgs<ExtArgs> = {}>(args?: Subset<T, User$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    usersRoles<T extends User$usersRolesArgs<ExtArgs> = {}>(args?: Subset<T, User$usersRolesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    importHistories<T extends User$importHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$importHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cskhNotes<T extends User$cskhNotesArgs<ExtArgs> = {}>(args?: Subset<T, User$cskhNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly employeeCode: FieldRef<"User", 'String'>
    readonly fullName: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly account_type: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly joinDate: FieldRef<"User", 'DateTime'>
    readonly leaveDate: FieldRef<"User", 'DateTime'>
    readonly isActive: FieldRef<"User", 'Boolean'>
    readonly regionCode: FieldRef<"User", 'String'>
    readonly seniorDeptManagerId: FieldRef<"User", 'String'>
    readonly deptManagerId: FieldRef<"User", 'String'>
    readonly managerId: FieldRef<"User", 'String'>
    readonly roleId: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.region
   */
  export type User$regionArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    where?: RegionWhereInput
  }

  /**
   * User.seniorDeptManager
   */
  export type User$seniorDeptManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.seniorDeptSubs
   */
  export type User$seniorDeptSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.deptManager
   */
  export type User$deptManagerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.deptSubs
   */
  export type User$deptSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.manager
   */
  export type User$managerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.directSubs
   */
  export type User$directSubsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.contracts
   */
  export type User$contractsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    where?: ContractsWhereInput
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    cursor?: ContractsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * User.auditLogs
   */
  export type User$auditLogsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    where?: Audit_LogsWhereInput
    orderBy?: Audit_LogsOrderByWithRelationInput | Audit_LogsOrderByWithRelationInput[]
    cursor?: Audit_LogsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Audit_LogsScalarFieldEnum | Audit_LogsScalarFieldEnum[]
  }

  /**
   * User.files
   */
  export type User$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    cursor?: FilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * User.usersRoles
   */
  export type User$usersRolesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    where?: Users_RolesWhereInput
    orderBy?: Users_RolesOrderByWithRelationInput | Users_RolesOrderByWithRelationInput[]
    cursor?: Users_RolesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Users_RolesScalarFieldEnum | Users_RolesScalarFieldEnum[]
  }

  /**
   * User.importHistories
   */
  export type User$importHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    where?: Import_HistoryWhereInput
    orderBy?: Import_HistoryOrderByWithRelationInput | Import_HistoryOrderByWithRelationInput[]
    cursor?: Import_HistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Import_HistoryScalarFieldEnum | Import_HistoryScalarFieldEnum[]
  }

  /**
   * User.cskhNotes
   */
  export type User$cskhNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    where?: Customer_Care_NotesWhereInput
    orderBy?: Customer_Care_NotesOrderByWithRelationInput | Customer_Care_NotesOrderByWithRelationInput[]
    cursor?: Customer_Care_NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_Care_NotesScalarFieldEnum | Customer_Care_NotesScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Region
   */

  export type AggregateRegion = {
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  export type RegionMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    isActive: boolean | null
  }

  export type RegionMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    address: string | null
    isActive: boolean | null
  }

  export type RegionCountAggregateOutputType = {
    id: number
    code: number
    name: number
    address: number
    isActive: number
    _all: number
  }


  export type RegionMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    isActive?: true
  }

  export type RegionMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    isActive?: true
  }

  export type RegionCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    address?: true
    isActive?: true
    _all?: true
  }

  export type RegionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Region to aggregate.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Regions
    **/
    _count?: true | RegionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RegionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RegionMaxAggregateInputType
  }

  export type GetRegionAggregateType<T extends RegionAggregateArgs> = {
        [P in keyof T & keyof AggregateRegion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRegion[P]>
      : GetScalarType<T[P], AggregateRegion[P]>
  }




  export type RegionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RegionWhereInput
    orderBy?: RegionOrderByWithAggregationInput | RegionOrderByWithAggregationInput[]
    by: RegionScalarFieldEnum[] | RegionScalarFieldEnum
    having?: RegionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RegionCountAggregateInputType | true
    _min?: RegionMinAggregateInputType
    _max?: RegionMaxAggregateInputType
  }

  export type RegionGroupByOutputType = {
    id: string
    code: string
    name: string
    address: string | null
    isActive: boolean
    _count: RegionCountAggregateOutputType | null
    _min: RegionMinAggregateOutputType | null
    _max: RegionMaxAggregateOutputType | null
  }

  type GetRegionGroupByPayload<T extends RegionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RegionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RegionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RegionGroupByOutputType[P]>
            : GetScalarType<T[P], RegionGroupByOutputType[P]>
        }
      >
    >


  export type RegionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    isActive?: boolean
    users?: boolean | Region$usersArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["region"]>

  export type RegionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    isActive?: boolean
  }, ExtArgs["result"]["region"]>

  export type RegionSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    address?: boolean
    isActive?: boolean
  }

  export type RegionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "address" | "isActive", ExtArgs["result"]["region"]>
  export type RegionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Region$usersArgs<ExtArgs>
    _count?: boolean | RegionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type RegionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type RegionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $RegionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Region"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      address: string | null
      isActive: boolean
    }, ExtArgs["result"]["region"]>
    composites: {}
  }

  type RegionGetPayload<S extends boolean | null | undefined | RegionDefaultArgs> = $Result.GetResult<Prisma.$RegionPayload, S>

  type RegionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RegionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RegionCountAggregateInputType | true
    }

  export interface RegionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Region'], meta: { name: 'Region' } }
    /**
     * Find zero or one Region that matches the filter.
     * @param {RegionFindUniqueArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RegionFindUniqueArgs>(args: SelectSubset<T, RegionFindUniqueArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Region that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RegionFindUniqueOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RegionFindUniqueOrThrowArgs>(args: SelectSubset<T, RegionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RegionFindFirstArgs>(args?: SelectSubset<T, RegionFindFirstArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Region that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindFirstOrThrowArgs} args - Arguments to find a Region
     * @example
     * // Get one Region
     * const region = await prisma.region.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RegionFindFirstOrThrowArgs>(args?: SelectSubset<T, RegionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Regions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Regions
     * const regions = await prisma.region.findMany()
     * 
     * // Get first 10 Regions
     * const regions = await prisma.region.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const regionWithIdOnly = await prisma.region.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RegionFindManyArgs>(args?: SelectSubset<T, RegionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Region.
     * @param {RegionCreateArgs} args - Arguments to create a Region.
     * @example
     * // Create one Region
     * const Region = await prisma.region.create({
     *   data: {
     *     // ... data to create a Region
     *   }
     * })
     * 
     */
    create<T extends RegionCreateArgs>(args: SelectSubset<T, RegionCreateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Regions.
     * @param {RegionCreateManyArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RegionCreateManyArgs>(args?: SelectSubset<T, RegionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Regions and returns the data saved in the database.
     * @param {RegionCreateManyAndReturnArgs} args - Arguments to create many Regions.
     * @example
     * // Create many Regions
     * const region = await prisma.region.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RegionCreateManyAndReturnArgs>(args?: SelectSubset<T, RegionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Region.
     * @param {RegionDeleteArgs} args - Arguments to delete one Region.
     * @example
     * // Delete one Region
     * const Region = await prisma.region.delete({
     *   where: {
     *     // ... filter to delete one Region
     *   }
     * })
     * 
     */
    delete<T extends RegionDeleteArgs>(args: SelectSubset<T, RegionDeleteArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Region.
     * @param {RegionUpdateArgs} args - Arguments to update one Region.
     * @example
     * // Update one Region
     * const region = await prisma.region.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RegionUpdateArgs>(args: SelectSubset<T, RegionUpdateArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Regions.
     * @param {RegionDeleteManyArgs} args - Arguments to filter Regions to delete.
     * @example
     * // Delete a few Regions
     * const { count } = await prisma.region.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RegionDeleteManyArgs>(args?: SelectSubset<T, RegionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RegionUpdateManyArgs>(args: SelectSubset<T, RegionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Regions and returns the data updated in the database.
     * @param {RegionUpdateManyAndReturnArgs} args - Arguments to update many Regions.
     * @example
     * // Update many Regions
     * const region = await prisma.region.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Regions and only return the `id`
     * const regionWithIdOnly = await prisma.region.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RegionUpdateManyAndReturnArgs>(args: SelectSubset<T, RegionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Region.
     * @param {RegionUpsertArgs} args - Arguments to update or create a Region.
     * @example
     * // Update or create a Region
     * const region = await prisma.region.upsert({
     *   create: {
     *     // ... data to create a Region
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Region we want to update
     *   }
     * })
     */
    upsert<T extends RegionUpsertArgs>(args: SelectSubset<T, RegionUpsertArgs<ExtArgs>>): Prisma__RegionClient<$Result.GetResult<Prisma.$RegionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Regions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionCountArgs} args - Arguments to filter Regions to count.
     * @example
     * // Count the number of Regions
     * const count = await prisma.region.count({
     *   where: {
     *     // ... the filter for the Regions we want to count
     *   }
     * })
    **/
    count<T extends RegionCountArgs>(
      args?: Subset<T, RegionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RegionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RegionAggregateArgs>(args: Subset<T, RegionAggregateArgs>): Prisma.PrismaPromise<GetRegionAggregateType<T>>

    /**
     * Group by Region.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RegionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RegionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RegionGroupByArgs['orderBy'] }
        : { orderBy?: RegionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RegionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRegionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Region model
   */
  readonly fields: RegionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Region.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RegionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Region$usersArgs<ExtArgs> = {}>(args?: Subset<T, Region$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Region model
   */
  interface RegionFieldRefs {
    readonly id: FieldRef<"Region", 'String'>
    readonly code: FieldRef<"Region", 'String'>
    readonly name: FieldRef<"Region", 'String'>
    readonly address: FieldRef<"Region", 'String'>
    readonly isActive: FieldRef<"Region", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Region findUnique
   */
  export type RegionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findUniqueOrThrow
   */
  export type RegionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region findFirst
   */
  export type RegionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findFirstOrThrow
   */
  export type RegionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Region to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Regions.
     */
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region findMany
   */
  export type RegionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter, which Regions to fetch.
     */
    where?: RegionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Regions to fetch.
     */
    orderBy?: RegionOrderByWithRelationInput | RegionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Regions.
     */
    cursor?: RegionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Regions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Regions.
     */
    skip?: number
    distinct?: RegionScalarFieldEnum | RegionScalarFieldEnum[]
  }

  /**
   * Region create
   */
  export type RegionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to create a Region.
     */
    data: XOR<RegionCreateInput, RegionUncheckedCreateInput>
  }

  /**
   * Region createMany
   */
  export type RegionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region createManyAndReturn
   */
  export type RegionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to create many Regions.
     */
    data: RegionCreateManyInput | RegionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Region update
   */
  export type RegionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The data needed to update a Region.
     */
    data: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
    /**
     * Choose, which Region to update.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region updateMany
   */
  export type RegionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region updateManyAndReturn
   */
  export type RegionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * The data used to update Regions.
     */
    data: XOR<RegionUpdateManyMutationInput, RegionUncheckedUpdateManyInput>
    /**
     * Filter which Regions to update
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to update.
     */
    limit?: number
  }

  /**
   * Region upsert
   */
  export type RegionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * The filter to search for the Region to update in case it exists.
     */
    where: RegionWhereUniqueInput
    /**
     * In case the Region found by the `where` argument doesn't exist, create a new Region with this data.
     */
    create: XOR<RegionCreateInput, RegionUncheckedCreateInput>
    /**
     * In case the Region was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RegionUpdateInput, RegionUncheckedUpdateInput>
  }

  /**
   * Region delete
   */
  export type RegionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
    /**
     * Filter which Region to delete.
     */
    where: RegionWhereUniqueInput
  }

  /**
   * Region deleteMany
   */
  export type RegionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Regions to delete
     */
    where?: RegionWhereInput
    /**
     * Limit how many Regions to delete.
     */
    limit?: number
  }

  /**
   * Region.users
   */
  export type Region$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Region without action
   */
  export type RegionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Region
     */
    select?: RegionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Region
     */
    omit?: RegionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RegionInclude<ExtArgs> | null
  }


  /**
   * Model Audit_Logs
   */

  export type AggregateAudit_Logs = {
    _count: Audit_LogsCountAggregateOutputType | null
    _min: Audit_LogsMinAggregateOutputType | null
    _max: Audit_LogsMaxAggregateOutputType | null
  }

  export type Audit_LogsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    tableName: string | null
    createdAt: Date | null
  }

  export type Audit_LogsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    action: string | null
    tableName: string | null
    createdAt: Date | null
  }

  export type Audit_LogsCountAggregateOutputType = {
    id: number
    userId: number
    action: number
    tableName: number
    oldData: number
    newValue: number
    createdAt: number
    _all: number
  }


  export type Audit_LogsMinAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    tableName?: true
    createdAt?: true
  }

  export type Audit_LogsMaxAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    tableName?: true
    createdAt?: true
  }

  export type Audit_LogsCountAggregateInputType = {
    id?: true
    userId?: true
    action?: true
    tableName?: true
    oldData?: true
    newValue?: true
    createdAt?: true
    _all?: true
  }

  export type Audit_LogsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit_Logs to aggregate.
     */
    where?: Audit_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogsOrderByWithRelationInput | Audit_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Audit_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Audit_Logs
    **/
    _count?: true | Audit_LogsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Audit_LogsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Audit_LogsMaxAggregateInputType
  }

  export type GetAudit_LogsAggregateType<T extends Audit_LogsAggregateArgs> = {
        [P in keyof T & keyof AggregateAudit_Logs]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAudit_Logs[P]>
      : GetScalarType<T[P], AggregateAudit_Logs[P]>
  }




  export type Audit_LogsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Audit_LogsWhereInput
    orderBy?: Audit_LogsOrderByWithAggregationInput | Audit_LogsOrderByWithAggregationInput[]
    by: Audit_LogsScalarFieldEnum[] | Audit_LogsScalarFieldEnum
    having?: Audit_LogsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Audit_LogsCountAggregateInputType | true
    _min?: Audit_LogsMinAggregateInputType
    _max?: Audit_LogsMaxAggregateInputType
  }

  export type Audit_LogsGroupByOutputType = {
    id: string
    userId: string
    action: string
    tableName: string
    oldData: JsonValue | null
    newValue: JsonValue | null
    createdAt: Date
    _count: Audit_LogsCountAggregateOutputType | null
    _min: Audit_LogsMinAggregateOutputType | null
    _max: Audit_LogsMaxAggregateOutputType | null
  }

  type GetAudit_LogsGroupByPayload<T extends Audit_LogsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Audit_LogsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Audit_LogsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Audit_LogsGroupByOutputType[P]>
            : GetScalarType<T[P], Audit_LogsGroupByOutputType[P]>
        }
      >
    >


  export type Audit_LogsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    oldData?: boolean
    newValue?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_Logs"]>

  export type Audit_LogsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    oldData?: boolean
    newValue?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_Logs"]>

  export type Audit_LogsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    oldData?: boolean
    newValue?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["audit_Logs"]>

  export type Audit_LogsSelectScalar = {
    id?: boolean
    userId?: boolean
    action?: boolean
    tableName?: boolean
    oldData?: boolean
    newValue?: boolean
    createdAt?: boolean
  }

  export type Audit_LogsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "action" | "tableName" | "oldData" | "newValue" | "createdAt", ExtArgs["result"]["audit_Logs"]>
  export type Audit_LogsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Audit_LogsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Audit_LogsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Audit_LogsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Audit_Logs"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      action: string
      tableName: string
      oldData: Prisma.JsonValue | null
      newValue: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["audit_Logs"]>
    composites: {}
  }

  type Audit_LogsGetPayload<S extends boolean | null | undefined | Audit_LogsDefaultArgs> = $Result.GetResult<Prisma.$Audit_LogsPayload, S>

  type Audit_LogsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Audit_LogsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Audit_LogsCountAggregateInputType | true
    }

  export interface Audit_LogsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Audit_Logs'], meta: { name: 'Audit_Logs' } }
    /**
     * Find zero or one Audit_Logs that matches the filter.
     * @param {Audit_LogsFindUniqueArgs} args - Arguments to find a Audit_Logs
     * @example
     * // Get one Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Audit_LogsFindUniqueArgs>(args: SelectSubset<T, Audit_LogsFindUniqueArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Audit_Logs that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Audit_LogsFindUniqueOrThrowArgs} args - Arguments to find a Audit_Logs
     * @example
     * // Get one Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Audit_LogsFindUniqueOrThrowArgs>(args: SelectSubset<T, Audit_LogsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsFindFirstArgs} args - Arguments to find a Audit_Logs
     * @example
     * // Get one Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Audit_LogsFindFirstArgs>(args?: SelectSubset<T, Audit_LogsFindFirstArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Audit_Logs that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsFindFirstOrThrowArgs} args - Arguments to find a Audit_Logs
     * @example
     * // Get one Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Audit_LogsFindFirstOrThrowArgs>(args?: SelectSubset<T, Audit_LogsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Audit_Logs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.findMany()
     * 
     * // Get first 10 Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const audit_LogsWithIdOnly = await prisma.audit_Logs.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Audit_LogsFindManyArgs>(args?: SelectSubset<T, Audit_LogsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Audit_Logs.
     * @param {Audit_LogsCreateArgs} args - Arguments to create a Audit_Logs.
     * @example
     * // Create one Audit_Logs
     * const Audit_Logs = await prisma.audit_Logs.create({
     *   data: {
     *     // ... data to create a Audit_Logs
     *   }
     * })
     * 
     */
    create<T extends Audit_LogsCreateArgs>(args: SelectSubset<T, Audit_LogsCreateArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Audit_Logs.
     * @param {Audit_LogsCreateManyArgs} args - Arguments to create many Audit_Logs.
     * @example
     * // Create many Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Audit_LogsCreateManyArgs>(args?: SelectSubset<T, Audit_LogsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Audit_Logs and returns the data saved in the database.
     * @param {Audit_LogsCreateManyAndReturnArgs} args - Arguments to create many Audit_Logs.
     * @example
     * // Create many Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Audit_Logs and only return the `id`
     * const audit_LogsWithIdOnly = await prisma.audit_Logs.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Audit_LogsCreateManyAndReturnArgs>(args?: SelectSubset<T, Audit_LogsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Audit_Logs.
     * @param {Audit_LogsDeleteArgs} args - Arguments to delete one Audit_Logs.
     * @example
     * // Delete one Audit_Logs
     * const Audit_Logs = await prisma.audit_Logs.delete({
     *   where: {
     *     // ... filter to delete one Audit_Logs
     *   }
     * })
     * 
     */
    delete<T extends Audit_LogsDeleteArgs>(args: SelectSubset<T, Audit_LogsDeleteArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Audit_Logs.
     * @param {Audit_LogsUpdateArgs} args - Arguments to update one Audit_Logs.
     * @example
     * // Update one Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Audit_LogsUpdateArgs>(args: SelectSubset<T, Audit_LogsUpdateArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Audit_Logs.
     * @param {Audit_LogsDeleteManyArgs} args - Arguments to filter Audit_Logs to delete.
     * @example
     * // Delete a few Audit_Logs
     * const { count } = await prisma.audit_Logs.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Audit_LogsDeleteManyArgs>(args?: SelectSubset<T, Audit_LogsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Audit_LogsUpdateManyArgs>(args: SelectSubset<T, Audit_LogsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Audit_Logs and returns the data updated in the database.
     * @param {Audit_LogsUpdateManyAndReturnArgs} args - Arguments to update many Audit_Logs.
     * @example
     * // Update many Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Audit_Logs and only return the `id`
     * const audit_LogsWithIdOnly = await prisma.audit_Logs.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Audit_LogsUpdateManyAndReturnArgs>(args: SelectSubset<T, Audit_LogsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Audit_Logs.
     * @param {Audit_LogsUpsertArgs} args - Arguments to update or create a Audit_Logs.
     * @example
     * // Update or create a Audit_Logs
     * const audit_Logs = await prisma.audit_Logs.upsert({
     *   create: {
     *     // ... data to create a Audit_Logs
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Audit_Logs we want to update
     *   }
     * })
     */
    upsert<T extends Audit_LogsUpsertArgs>(args: SelectSubset<T, Audit_LogsUpsertArgs<ExtArgs>>): Prisma__Audit_LogsClient<$Result.GetResult<Prisma.$Audit_LogsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Audit_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsCountArgs} args - Arguments to filter Audit_Logs to count.
     * @example
     * // Count the number of Audit_Logs
     * const count = await prisma.audit_Logs.count({
     *   where: {
     *     // ... the filter for the Audit_Logs we want to count
     *   }
     * })
    **/
    count<T extends Audit_LogsCountArgs>(
      args?: Subset<T, Audit_LogsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Audit_LogsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Audit_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Audit_LogsAggregateArgs>(args: Subset<T, Audit_LogsAggregateArgs>): Prisma.PrismaPromise<GetAudit_LogsAggregateType<T>>

    /**
     * Group by Audit_Logs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Audit_LogsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Audit_LogsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Audit_LogsGroupByArgs['orderBy'] }
        : { orderBy?: Audit_LogsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Audit_LogsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAudit_LogsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Audit_Logs model
   */
  readonly fields: Audit_LogsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Audit_Logs.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Audit_LogsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Audit_Logs model
   */
  interface Audit_LogsFieldRefs {
    readonly id: FieldRef<"Audit_Logs", 'String'>
    readonly userId: FieldRef<"Audit_Logs", 'String'>
    readonly action: FieldRef<"Audit_Logs", 'String'>
    readonly tableName: FieldRef<"Audit_Logs", 'String'>
    readonly oldData: FieldRef<"Audit_Logs", 'Json'>
    readonly newValue: FieldRef<"Audit_Logs", 'Json'>
    readonly createdAt: FieldRef<"Audit_Logs", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Audit_Logs findUnique
   */
  export type Audit_LogsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Logs to fetch.
     */
    where: Audit_LogsWhereUniqueInput
  }

  /**
   * Audit_Logs findUniqueOrThrow
   */
  export type Audit_LogsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Logs to fetch.
     */
    where: Audit_LogsWhereUniqueInput
  }

  /**
   * Audit_Logs findFirst
   */
  export type Audit_LogsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Logs to fetch.
     */
    where?: Audit_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogsOrderByWithRelationInput | Audit_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audit_Logs.
     */
    cursor?: Audit_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audit_Logs.
     */
    distinct?: Audit_LogsScalarFieldEnum | Audit_LogsScalarFieldEnum[]
  }

  /**
   * Audit_Logs findFirstOrThrow
   */
  export type Audit_LogsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Logs to fetch.
     */
    where?: Audit_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogsOrderByWithRelationInput | Audit_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Audit_Logs.
     */
    cursor?: Audit_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Audit_Logs.
     */
    distinct?: Audit_LogsScalarFieldEnum | Audit_LogsScalarFieldEnum[]
  }

  /**
   * Audit_Logs findMany
   */
  export type Audit_LogsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * Filter, which Audit_Logs to fetch.
     */
    where?: Audit_LogsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Audit_Logs to fetch.
     */
    orderBy?: Audit_LogsOrderByWithRelationInput | Audit_LogsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Audit_Logs.
     */
    cursor?: Audit_LogsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Audit_Logs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Audit_Logs.
     */
    skip?: number
    distinct?: Audit_LogsScalarFieldEnum | Audit_LogsScalarFieldEnum[]
  }

  /**
   * Audit_Logs create
   */
  export type Audit_LogsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * The data needed to create a Audit_Logs.
     */
    data: XOR<Audit_LogsCreateInput, Audit_LogsUncheckedCreateInput>
  }

  /**
   * Audit_Logs createMany
   */
  export type Audit_LogsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Audit_Logs.
     */
    data: Audit_LogsCreateManyInput | Audit_LogsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Audit_Logs createManyAndReturn
   */
  export type Audit_LogsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * The data used to create many Audit_Logs.
     */
    data: Audit_LogsCreateManyInput | Audit_LogsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit_Logs update
   */
  export type Audit_LogsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * The data needed to update a Audit_Logs.
     */
    data: XOR<Audit_LogsUpdateInput, Audit_LogsUncheckedUpdateInput>
    /**
     * Choose, which Audit_Logs to update.
     */
    where: Audit_LogsWhereUniqueInput
  }

  /**
   * Audit_Logs updateMany
   */
  export type Audit_LogsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Audit_Logs.
     */
    data: XOR<Audit_LogsUpdateManyMutationInput, Audit_LogsUncheckedUpdateManyInput>
    /**
     * Filter which Audit_Logs to update
     */
    where?: Audit_LogsWhereInput
    /**
     * Limit how many Audit_Logs to update.
     */
    limit?: number
  }

  /**
   * Audit_Logs updateManyAndReturn
   */
  export type Audit_LogsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * The data used to update Audit_Logs.
     */
    data: XOR<Audit_LogsUpdateManyMutationInput, Audit_LogsUncheckedUpdateManyInput>
    /**
     * Filter which Audit_Logs to update
     */
    where?: Audit_LogsWhereInput
    /**
     * Limit how many Audit_Logs to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Audit_Logs upsert
   */
  export type Audit_LogsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * The filter to search for the Audit_Logs to update in case it exists.
     */
    where: Audit_LogsWhereUniqueInput
    /**
     * In case the Audit_Logs found by the `where` argument doesn't exist, create a new Audit_Logs with this data.
     */
    create: XOR<Audit_LogsCreateInput, Audit_LogsUncheckedCreateInput>
    /**
     * In case the Audit_Logs was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Audit_LogsUpdateInput, Audit_LogsUncheckedUpdateInput>
  }

  /**
   * Audit_Logs delete
   */
  export type Audit_LogsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
    /**
     * Filter which Audit_Logs to delete.
     */
    where: Audit_LogsWhereUniqueInput
  }

  /**
   * Audit_Logs deleteMany
   */
  export type Audit_LogsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Audit_Logs to delete
     */
    where?: Audit_LogsWhereInput
    /**
     * Limit how many Audit_Logs to delete.
     */
    limit?: number
  }

  /**
   * Audit_Logs without action
   */
  export type Audit_LogsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Audit_Logs
     */
    select?: Audit_LogsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Audit_Logs
     */
    omit?: Audit_LogsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Audit_LogsInclude<ExtArgs> | null
  }


  /**
   * Model Files
   */

  export type AggregateFiles = {
    _count: FilesCountAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  export type FilesMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    filePath: string | null
    fileType: string | null
    category: string | null
    userId: string | null
    contractId: string | null
    createdAt: Date | null
  }

  export type FilesMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    filePath: string | null
    fileType: string | null
    category: string | null
    userId: string | null
    contractId: string | null
    createdAt: Date | null
  }

  export type FilesCountAggregateOutputType = {
    id: number
    fileName: number
    filePath: number
    fileType: number
    category: number
    userId: number
    contractId: number
    createdAt: number
    _all: number
  }


  export type FilesMinAggregateInputType = {
    id?: true
    fileName?: true
    filePath?: true
    fileType?: true
    category?: true
    userId?: true
    contractId?: true
    createdAt?: true
  }

  export type FilesMaxAggregateInputType = {
    id?: true
    fileName?: true
    filePath?: true
    fileType?: true
    category?: true
    userId?: true
    contractId?: true
    createdAt?: true
  }

  export type FilesCountAggregateInputType = {
    id?: true
    fileName?: true
    filePath?: true
    fileType?: true
    category?: true
    userId?: true
    contractId?: true
    createdAt?: true
    _all?: true
  }

  export type FilesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to aggregate.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Files
    **/
    _count?: true | FilesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FilesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FilesMaxAggregateInputType
  }

  export type GetFilesAggregateType<T extends FilesAggregateArgs> = {
        [P in keyof T & keyof AggregateFiles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFiles[P]>
      : GetScalarType<T[P], AggregateFiles[P]>
  }




  export type FilesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithAggregationInput | FilesOrderByWithAggregationInput[]
    by: FilesScalarFieldEnum[] | FilesScalarFieldEnum
    having?: FilesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FilesCountAggregateInputType | true
    _min?: FilesMinAggregateInputType
    _max?: FilesMaxAggregateInputType
  }

  export type FilesGroupByOutputType = {
    id: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    userId: string | null
    contractId: string | null
    createdAt: Date
    _count: FilesCountAggregateOutputType | null
    _min: FilesMinAggregateOutputType | null
    _max: FilesMaxAggregateOutputType | null
  }

  type GetFilesGroupByPayload<T extends FilesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FilesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FilesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FilesGroupByOutputType[P]>
            : GetScalarType<T[P], FilesGroupByOutputType[P]>
        }
      >
    >


  export type FilesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    filePath?: boolean
    fileType?: boolean
    category?: boolean
    userId?: boolean
    contractId?: boolean
    createdAt?: boolean
    user?: boolean | Files$userArgs<ExtArgs>
    contract?: boolean | Files$contractArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    filePath?: boolean
    fileType?: boolean
    category?: boolean
    userId?: boolean
    contractId?: boolean
    createdAt?: boolean
    user?: boolean | Files$userArgs<ExtArgs>
    contract?: boolean | Files$contractArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    filePath?: boolean
    fileType?: boolean
    category?: boolean
    userId?: boolean
    contractId?: boolean
    createdAt?: boolean
    user?: boolean | Files$userArgs<ExtArgs>
    contract?: boolean | Files$contractArgs<ExtArgs>
  }, ExtArgs["result"]["files"]>

  export type FilesSelectScalar = {
    id?: boolean
    fileName?: boolean
    filePath?: boolean
    fileType?: boolean
    category?: boolean
    userId?: boolean
    contractId?: boolean
    createdAt?: boolean
  }

  export type FilesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "filePath" | "fileType" | "category" | "userId" | "contractId" | "createdAt", ExtArgs["result"]["files"]>
  export type FilesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Files$userArgs<ExtArgs>
    contract?: boolean | Files$contractArgs<ExtArgs>
  }
  export type FilesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Files$userArgs<ExtArgs>
    contract?: boolean | Files$contractArgs<ExtArgs>
  }
  export type FilesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | Files$userArgs<ExtArgs>
    contract?: boolean | Files$contractArgs<ExtArgs>
  }

  export type $FilesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Files"
    objects: {
      user: Prisma.$UserPayload<ExtArgs> | null
      contract: Prisma.$ContractsPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      filePath: string
      fileType: string
      category: string
      userId: string | null
      contractId: string | null
      createdAt: Date
    }, ExtArgs["result"]["files"]>
    composites: {}
  }

  type FilesGetPayload<S extends boolean | null | undefined | FilesDefaultArgs> = $Result.GetResult<Prisma.$FilesPayload, S>

  type FilesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FilesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FilesCountAggregateInputType | true
    }

  export interface FilesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Files'], meta: { name: 'Files' } }
    /**
     * Find zero or one Files that matches the filter.
     * @param {FilesFindUniqueArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FilesFindUniqueArgs>(args: SelectSubset<T, FilesFindUniqueArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Files that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FilesFindUniqueOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FilesFindUniqueOrThrowArgs>(args: SelectSubset<T, FilesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FilesFindFirstArgs>(args?: SelectSubset<T, FilesFindFirstArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Files that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindFirstOrThrowArgs} args - Arguments to find a Files
     * @example
     * // Get one Files
     * const files = await prisma.files.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FilesFindFirstOrThrowArgs>(args?: SelectSubset<T, FilesFindFirstOrThrowArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Files that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Files
     * const files = await prisma.files.findMany()
     * 
     * // Get first 10 Files
     * const files = await prisma.files.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const filesWithIdOnly = await prisma.files.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FilesFindManyArgs>(args?: SelectSubset<T, FilesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Files.
     * @param {FilesCreateArgs} args - Arguments to create a Files.
     * @example
     * // Create one Files
     * const Files = await prisma.files.create({
     *   data: {
     *     // ... data to create a Files
     *   }
     * })
     * 
     */
    create<T extends FilesCreateArgs>(args: SelectSubset<T, FilesCreateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Files.
     * @param {FilesCreateManyArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FilesCreateManyArgs>(args?: SelectSubset<T, FilesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Files and returns the data saved in the database.
     * @param {FilesCreateManyAndReturnArgs} args - Arguments to create many Files.
     * @example
     * // Create many Files
     * const files = await prisma.files.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FilesCreateManyAndReturnArgs>(args?: SelectSubset<T, FilesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Files.
     * @param {FilesDeleteArgs} args - Arguments to delete one Files.
     * @example
     * // Delete one Files
     * const Files = await prisma.files.delete({
     *   where: {
     *     // ... filter to delete one Files
     *   }
     * })
     * 
     */
    delete<T extends FilesDeleteArgs>(args: SelectSubset<T, FilesDeleteArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Files.
     * @param {FilesUpdateArgs} args - Arguments to update one Files.
     * @example
     * // Update one Files
     * const files = await prisma.files.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FilesUpdateArgs>(args: SelectSubset<T, FilesUpdateArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Files.
     * @param {FilesDeleteManyArgs} args - Arguments to filter Files to delete.
     * @example
     * // Delete a few Files
     * const { count } = await prisma.files.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FilesDeleteManyArgs>(args?: SelectSubset<T, FilesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FilesUpdateManyArgs>(args: SelectSubset<T, FilesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Files and returns the data updated in the database.
     * @param {FilesUpdateManyAndReturnArgs} args - Arguments to update many Files.
     * @example
     * // Update many Files
     * const files = await prisma.files.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Files and only return the `id`
     * const filesWithIdOnly = await prisma.files.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FilesUpdateManyAndReturnArgs>(args: SelectSubset<T, FilesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Files.
     * @param {FilesUpsertArgs} args - Arguments to update or create a Files.
     * @example
     * // Update or create a Files
     * const files = await prisma.files.upsert({
     *   create: {
     *     // ... data to create a Files
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Files we want to update
     *   }
     * })
     */
    upsert<T extends FilesUpsertArgs>(args: SelectSubset<T, FilesUpsertArgs<ExtArgs>>): Prisma__FilesClient<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesCountArgs} args - Arguments to filter Files to count.
     * @example
     * // Count the number of Files
     * const count = await prisma.files.count({
     *   where: {
     *     // ... the filter for the Files we want to count
     *   }
     * })
    **/
    count<T extends FilesCountArgs>(
      args?: Subset<T, FilesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FilesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends FilesAggregateArgs>(args: Subset<T, FilesAggregateArgs>): Prisma.PrismaPromise<GetFilesAggregateType<T>>

    /**
     * Group by Files.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FilesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends FilesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FilesGroupByArgs['orderBy'] }
        : { orderBy?: FilesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, FilesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFilesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Files model
   */
  readonly fields: FilesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Files.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FilesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends Files$userArgs<ExtArgs> = {}>(args?: Subset<T, Files$userArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    contract<T extends Files$contractArgs<ExtArgs> = {}>(args?: Subset<T, Files$contractArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Files model
   */
  interface FilesFieldRefs {
    readonly id: FieldRef<"Files", 'String'>
    readonly fileName: FieldRef<"Files", 'String'>
    readonly filePath: FieldRef<"Files", 'String'>
    readonly fileType: FieldRef<"Files", 'String'>
    readonly category: FieldRef<"Files", 'String'>
    readonly userId: FieldRef<"Files", 'String'>
    readonly contractId: FieldRef<"Files", 'String'>
    readonly createdAt: FieldRef<"Files", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Files findUnique
   */
  export type FilesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findUniqueOrThrow
   */
  export type FilesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files findFirst
   */
  export type FilesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findFirstOrThrow
   */
  export type FilesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Files.
     */
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files findMany
   */
  export type FilesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter, which Files to fetch.
     */
    where?: FilesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Files to fetch.
     */
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Files.
     */
    cursor?: FilesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Files from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Files.
     */
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Files create
   */
  export type FilesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to create a Files.
     */
    data: XOR<FilesCreateInput, FilesUncheckedCreateInput>
  }

  /**
   * Files createMany
   */
  export type FilesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Files createManyAndReturn
   */
  export type FilesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to create many Files.
     */
    data: FilesCreateManyInput | FilesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files update
   */
  export type FilesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The data needed to update a Files.
     */
    data: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
    /**
     * Choose, which Files to update.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files updateMany
   */
  export type FilesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
  }

  /**
   * Files updateManyAndReturn
   */
  export type FilesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * The data used to update Files.
     */
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyInput>
    /**
     * Filter which Files to update
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Files upsert
   */
  export type FilesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * The filter to search for the Files to update in case it exists.
     */
    where: FilesWhereUniqueInput
    /**
     * In case the Files found by the `where` argument doesn't exist, create a new Files with this data.
     */
    create: XOR<FilesCreateInput, FilesUncheckedCreateInput>
    /**
     * In case the Files was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FilesUpdateInput, FilesUncheckedUpdateInput>
  }

  /**
   * Files delete
   */
  export type FilesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    /**
     * Filter which Files to delete.
     */
    where: FilesWhereUniqueInput
  }

  /**
   * Files deleteMany
   */
  export type FilesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Files to delete
     */
    where?: FilesWhereInput
    /**
     * Limit how many Files to delete.
     */
    limit?: number
  }

  /**
   * Files.user
   */
  export type Files$userArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Files.contract
   */
  export type Files$contractArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    where?: ContractsWhereInput
  }

  /**
   * Files without action
   */
  export type FilesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
  }


  /**
   * Model Permissions
   */

  export type AggregatePermissions = {
    _count: PermissionsCountAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  export type PermissionsMinAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    module: string | null
  }

  export type PermissionsMaxAggregateOutputType = {
    id: string | null
    code: string | null
    name: string | null
    module: string | null
  }

  export type PermissionsCountAggregateOutputType = {
    id: number
    code: number
    name: number
    module: number
    _all: number
  }


  export type PermissionsMinAggregateInputType = {
    id?: true
    code?: true
    name?: true
    module?: true
  }

  export type PermissionsMaxAggregateInputType = {
    id?: true
    code?: true
    name?: true
    module?: true
  }

  export type PermissionsCountAggregateInputType = {
    id?: true
    code?: true
    name?: true
    module?: true
    _all?: true
  }

  export type PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to aggregate.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Permissions
    **/
    _count?: true | PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PermissionsMaxAggregateInputType
  }

  export type GetPermissionsAggregateType<T extends PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregatePermissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePermissions[P]>
      : GetScalarType<T[P], AggregatePermissions[P]>
  }




  export type PermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PermissionsWhereInput
    orderBy?: PermissionsOrderByWithAggregationInput | PermissionsOrderByWithAggregationInput[]
    by: PermissionsScalarFieldEnum[] | PermissionsScalarFieldEnum
    having?: PermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PermissionsCountAggregateInputType | true
    _min?: PermissionsMinAggregateInputType
    _max?: PermissionsMaxAggregateInputType
  }

  export type PermissionsGroupByOutputType = {
    id: string
    code: string
    name: string
    module: string | null
    _count: PermissionsCountAggregateOutputType | null
    _min: PermissionsMinAggregateOutputType | null
    _max: PermissionsMaxAggregateOutputType | null
  }

  type GetPermissionsGroupByPayload<T extends PermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type PermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    module?: boolean
    rolesPermissions?: boolean | Permissions$rolesPermissionsArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["permissions"]>

  export type PermissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    module?: boolean
  }, ExtArgs["result"]["permissions"]>

  export type PermissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    name?: boolean
    module?: boolean
  }, ExtArgs["result"]["permissions"]>

  export type PermissionsSelectScalar = {
    id?: boolean
    code?: boolean
    name?: boolean
    module?: boolean
  }

  export type PermissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "name" | "module", ExtArgs["result"]["permissions"]>
  export type PermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rolesPermissions?: boolean | Permissions$rolesPermissionsArgs<ExtArgs>
    _count?: boolean | PermissionsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PermissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PermissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Permissions"
    objects: {
      rolesPermissions: Prisma.$Roles_PermissionsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      name: string
      module: string | null
    }, ExtArgs["result"]["permissions"]>
    composites: {}
  }

  type PermissionsGetPayload<S extends boolean | null | undefined | PermissionsDefaultArgs> = $Result.GetResult<Prisma.$PermissionsPayload, S>

  type PermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PermissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PermissionsCountAggregateInputType | true
    }

  export interface PermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Permissions'], meta: { name: 'Permissions' } }
    /**
     * Find zero or one Permissions that matches the filter.
     * @param {PermissionsFindUniqueArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PermissionsFindUniqueArgs>(args: SelectSubset<T, PermissionsFindUniqueArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PermissionsFindUniqueOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, PermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindFirstArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PermissionsFindFirstArgs>(args?: SelectSubset<T, PermissionsFindFirstArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindFirstOrThrowArgs} args - Arguments to find a Permissions
     * @example
     * // Get one Permissions
     * const permissions = await prisma.permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, PermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Permissions
     * const permissions = await prisma.permissions.findMany()
     * 
     * // Get first 10 Permissions
     * const permissions = await prisma.permissions.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const permissionsWithIdOnly = await prisma.permissions.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PermissionsFindManyArgs>(args?: SelectSubset<T, PermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Permissions.
     * @param {PermissionsCreateArgs} args - Arguments to create a Permissions.
     * @example
     * // Create one Permissions
     * const Permissions = await prisma.permissions.create({
     *   data: {
     *     // ... data to create a Permissions
     *   }
     * })
     * 
     */
    create<T extends PermissionsCreateArgs>(args: SelectSubset<T, PermissionsCreateArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Permissions.
     * @param {PermissionsCreateManyArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PermissionsCreateManyArgs>(args?: SelectSubset<T, PermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Permissions and returns the data saved in the database.
     * @param {PermissionsCreateManyAndReturnArgs} args - Arguments to create many Permissions.
     * @example
     * // Create many Permissions
     * const permissions = await prisma.permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Permissions and only return the `id`
     * const permissionsWithIdOnly = await prisma.permissions.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PermissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, PermissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Permissions.
     * @param {PermissionsDeleteArgs} args - Arguments to delete one Permissions.
     * @example
     * // Delete one Permissions
     * const Permissions = await prisma.permissions.delete({
     *   where: {
     *     // ... filter to delete one Permissions
     *   }
     * })
     * 
     */
    delete<T extends PermissionsDeleteArgs>(args: SelectSubset<T, PermissionsDeleteArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Permissions.
     * @param {PermissionsUpdateArgs} args - Arguments to update one Permissions.
     * @example
     * // Update one Permissions
     * const permissions = await prisma.permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PermissionsUpdateArgs>(args: SelectSubset<T, PermissionsUpdateArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Permissions.
     * @param {PermissionsDeleteManyArgs} args - Arguments to filter Permissions to delete.
     * @example
     * // Delete a few Permissions
     * const { count } = await prisma.permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PermissionsDeleteManyArgs>(args?: SelectSubset<T, PermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PermissionsUpdateManyArgs>(args: SelectSubset<T, PermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Permissions and returns the data updated in the database.
     * @param {PermissionsUpdateManyAndReturnArgs} args - Arguments to update many Permissions.
     * @example
     * // Update many Permissions
     * const permissions = await prisma.permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Permissions and only return the `id`
     * const permissionsWithIdOnly = await prisma.permissions.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PermissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, PermissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Permissions.
     * @param {PermissionsUpsertArgs} args - Arguments to update or create a Permissions.
     * @example
     * // Update or create a Permissions
     * const permissions = await prisma.permissions.upsert({
     *   create: {
     *     // ... data to create a Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Permissions we want to update
     *   }
     * })
     */
    upsert<T extends PermissionsUpsertArgs>(args: SelectSubset<T, PermissionsUpsertArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsCountArgs} args - Arguments to filter Permissions to count.
     * @example
     * // Count the number of Permissions
     * const count = await prisma.permissions.count({
     *   where: {
     *     // ... the filter for the Permissions we want to count
     *   }
     * })
    **/
    count<T extends PermissionsCountArgs>(
      args?: Subset<T, PermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PermissionsAggregateArgs>(args: Subset<T, PermissionsAggregateArgs>): Prisma.PrismaPromise<GetPermissionsAggregateType<T>>

    /**
     * Group by Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PermissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PermissionsGroupByArgs['orderBy'] }
        : { orderBy?: PermissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Permissions model
   */
  readonly fields: PermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rolesPermissions<T extends Permissions$rolesPermissionsArgs<ExtArgs> = {}>(args?: Subset<T, Permissions$rolesPermissionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Permissions model
   */
  interface PermissionsFieldRefs {
    readonly id: FieldRef<"Permissions", 'String'>
    readonly code: FieldRef<"Permissions", 'String'>
    readonly name: FieldRef<"Permissions", 'String'>
    readonly module: FieldRef<"Permissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Permissions findUnique
   */
  export type PermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions findUniqueOrThrow
   */
  export type PermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions findFirst
   */
  export type PermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions findFirstOrThrow
   */
  export type PermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Permissions.
     */
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions findMany
   */
  export type PermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Permissions to fetch.
     */
    where?: PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Permissions to fetch.
     */
    orderBy?: PermissionsOrderByWithRelationInput | PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Permissions.
     */
    cursor?: PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Permissions.
     */
    skip?: number
    distinct?: PermissionsScalarFieldEnum | PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions create
   */
  export type PermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Permissions.
     */
    data: XOR<PermissionsCreateInput, PermissionsUncheckedCreateInput>
  }

  /**
   * Permissions createMany
   */
  export type PermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Permissions.
     */
    data: PermissionsCreateManyInput | PermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissions createManyAndReturn
   */
  export type PermissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * The data used to create many Permissions.
     */
    data: PermissionsCreateManyInput | PermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Permissions update
   */
  export type PermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Permissions.
     */
    data: XOR<PermissionsUpdateInput, PermissionsUncheckedUpdateInput>
    /**
     * Choose, which Permissions to update.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions updateMany
   */
  export type PermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionsUpdateManyMutationInput, PermissionsUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permissions updateManyAndReturn
   */
  export type PermissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * The data used to update Permissions.
     */
    data: XOR<PermissionsUpdateManyMutationInput, PermissionsUncheckedUpdateManyInput>
    /**
     * Filter which Permissions to update
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to update.
     */
    limit?: number
  }

  /**
   * Permissions upsert
   */
  export type PermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Permissions to update in case it exists.
     */
    where: PermissionsWhereUniqueInput
    /**
     * In case the Permissions found by the `where` argument doesn't exist, create a new Permissions with this data.
     */
    create: XOR<PermissionsCreateInput, PermissionsUncheckedCreateInput>
    /**
     * In case the Permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PermissionsUpdateInput, PermissionsUncheckedUpdateInput>
  }

  /**
   * Permissions delete
   */
  export type PermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
    /**
     * Filter which Permissions to delete.
     */
    where: PermissionsWhereUniqueInput
  }

  /**
   * Permissions deleteMany
   */
  export type PermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Permissions to delete
     */
    where?: PermissionsWhereInput
    /**
     * Limit how many Permissions to delete.
     */
    limit?: number
  }

  /**
   * Permissions.rolesPermissions
   */
  export type Permissions$rolesPermissionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    where?: Roles_PermissionsWhereInput
    orderBy?: Roles_PermissionsOrderByWithRelationInput | Roles_PermissionsOrderByWithRelationInput[]
    cursor?: Roles_PermissionsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Roles_PermissionsScalarFieldEnum | Roles_PermissionsScalarFieldEnum[]
  }

  /**
   * Permissions without action
   */
  export type PermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Permissions
     */
    select?: PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Permissions
     */
    omit?: PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PermissionsInclude<ExtArgs> | null
  }


  /**
   * Model Roles_Permissions
   */

  export type AggregateRoles_Permissions = {
    _count: Roles_PermissionsCountAggregateOutputType | null
    _min: Roles_PermissionsMinAggregateOutputType | null
    _max: Roles_PermissionsMaxAggregateOutputType | null
  }

  export type Roles_PermissionsMinAggregateOutputType = {
    roleId: string | null
    permissionId: string | null
  }

  export type Roles_PermissionsMaxAggregateOutputType = {
    roleId: string | null
    permissionId: string | null
  }

  export type Roles_PermissionsCountAggregateOutputType = {
    roleId: number
    permissionId: number
    _all: number
  }


  export type Roles_PermissionsMinAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type Roles_PermissionsMaxAggregateInputType = {
    roleId?: true
    permissionId?: true
  }

  export type Roles_PermissionsCountAggregateInputType = {
    roleId?: true
    permissionId?: true
    _all?: true
  }

  export type Roles_PermissionsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles_Permissions to aggregate.
     */
    where?: Roles_PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles_Permissions to fetch.
     */
    orderBy?: Roles_PermissionsOrderByWithRelationInput | Roles_PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Roles_PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Roles_Permissions
    **/
    _count?: true | Roles_PermissionsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Roles_PermissionsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Roles_PermissionsMaxAggregateInputType
  }

  export type GetRoles_PermissionsAggregateType<T extends Roles_PermissionsAggregateArgs> = {
        [P in keyof T & keyof AggregateRoles_Permissions]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRoles_Permissions[P]>
      : GetScalarType<T[P], AggregateRoles_Permissions[P]>
  }




  export type Roles_PermissionsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Roles_PermissionsWhereInput
    orderBy?: Roles_PermissionsOrderByWithAggregationInput | Roles_PermissionsOrderByWithAggregationInput[]
    by: Roles_PermissionsScalarFieldEnum[] | Roles_PermissionsScalarFieldEnum
    having?: Roles_PermissionsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Roles_PermissionsCountAggregateInputType | true
    _min?: Roles_PermissionsMinAggregateInputType
    _max?: Roles_PermissionsMaxAggregateInputType
  }

  export type Roles_PermissionsGroupByOutputType = {
    roleId: string
    permissionId: string
    _count: Roles_PermissionsCountAggregateOutputType | null
    _min: Roles_PermissionsMinAggregateOutputType | null
    _max: Roles_PermissionsMaxAggregateOutputType | null
  }

  type GetRoles_PermissionsGroupByPayload<T extends Roles_PermissionsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Roles_PermissionsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Roles_PermissionsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Roles_PermissionsGroupByOutputType[P]>
            : GetScalarType<T[P], Roles_PermissionsGroupByOutputType[P]>
        }
      >
    >


  export type Roles_PermissionsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles_Permissions"]>

  export type Roles_PermissionsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles_Permissions"]>

  export type Roles_PermissionsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    roleId?: boolean
    permissionId?: boolean
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["roles_Permissions"]>

  export type Roles_PermissionsSelectScalar = {
    roleId?: boolean
    permissionId?: boolean
  }

  export type Roles_PermissionsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"roleId" | "permissionId", ExtArgs["result"]["roles_Permissions"]>
  export type Roles_PermissionsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionsDefaultArgs<ExtArgs>
  }
  export type Roles_PermissionsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionsDefaultArgs<ExtArgs>
  }
  export type Roles_PermissionsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    role?: boolean | RoleDefaultArgs<ExtArgs>
    permission?: boolean | PermissionsDefaultArgs<ExtArgs>
  }

  export type $Roles_PermissionsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Roles_Permissions"
    objects: {
      role: Prisma.$RolePayload<ExtArgs>
      permission: Prisma.$PermissionsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      roleId: string
      permissionId: string
    }, ExtArgs["result"]["roles_Permissions"]>
    composites: {}
  }

  type Roles_PermissionsGetPayload<S extends boolean | null | undefined | Roles_PermissionsDefaultArgs> = $Result.GetResult<Prisma.$Roles_PermissionsPayload, S>

  type Roles_PermissionsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Roles_PermissionsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Roles_PermissionsCountAggregateInputType | true
    }

  export interface Roles_PermissionsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Roles_Permissions'], meta: { name: 'Roles_Permissions' } }
    /**
     * Find zero or one Roles_Permissions that matches the filter.
     * @param {Roles_PermissionsFindUniqueArgs} args - Arguments to find a Roles_Permissions
     * @example
     * // Get one Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Roles_PermissionsFindUniqueArgs>(args: SelectSubset<T, Roles_PermissionsFindUniqueArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Roles_Permissions that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Roles_PermissionsFindUniqueOrThrowArgs} args - Arguments to find a Roles_Permissions
     * @example
     * // Get one Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Roles_PermissionsFindUniqueOrThrowArgs>(args: SelectSubset<T, Roles_PermissionsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles_Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsFindFirstArgs} args - Arguments to find a Roles_Permissions
     * @example
     * // Get one Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Roles_PermissionsFindFirstArgs>(args?: SelectSubset<T, Roles_PermissionsFindFirstArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Roles_Permissions that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsFindFirstOrThrowArgs} args - Arguments to find a Roles_Permissions
     * @example
     * // Get one Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Roles_PermissionsFindFirstOrThrowArgs>(args?: SelectSubset<T, Roles_PermissionsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Roles_Permissions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.findMany()
     * 
     * // Get first 10 Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.findMany({ take: 10 })
     * 
     * // Only select the `roleId`
     * const roles_PermissionsWithRoleIdOnly = await prisma.roles_Permissions.findMany({ select: { roleId: true } })
     * 
     */
    findMany<T extends Roles_PermissionsFindManyArgs>(args?: SelectSubset<T, Roles_PermissionsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Roles_Permissions.
     * @param {Roles_PermissionsCreateArgs} args - Arguments to create a Roles_Permissions.
     * @example
     * // Create one Roles_Permissions
     * const Roles_Permissions = await prisma.roles_Permissions.create({
     *   data: {
     *     // ... data to create a Roles_Permissions
     *   }
     * })
     * 
     */
    create<T extends Roles_PermissionsCreateArgs>(args: SelectSubset<T, Roles_PermissionsCreateArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Roles_Permissions.
     * @param {Roles_PermissionsCreateManyArgs} args - Arguments to create many Roles_Permissions.
     * @example
     * // Create many Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Roles_PermissionsCreateManyArgs>(args?: SelectSubset<T, Roles_PermissionsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Roles_Permissions and returns the data saved in the database.
     * @param {Roles_PermissionsCreateManyAndReturnArgs} args - Arguments to create many Roles_Permissions.
     * @example
     * // Create many Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Roles_Permissions and only return the `roleId`
     * const roles_PermissionsWithRoleIdOnly = await prisma.roles_Permissions.createManyAndReturn({
     *   select: { roleId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Roles_PermissionsCreateManyAndReturnArgs>(args?: SelectSubset<T, Roles_PermissionsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Roles_Permissions.
     * @param {Roles_PermissionsDeleteArgs} args - Arguments to delete one Roles_Permissions.
     * @example
     * // Delete one Roles_Permissions
     * const Roles_Permissions = await prisma.roles_Permissions.delete({
     *   where: {
     *     // ... filter to delete one Roles_Permissions
     *   }
     * })
     * 
     */
    delete<T extends Roles_PermissionsDeleteArgs>(args: SelectSubset<T, Roles_PermissionsDeleteArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Roles_Permissions.
     * @param {Roles_PermissionsUpdateArgs} args - Arguments to update one Roles_Permissions.
     * @example
     * // Update one Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Roles_PermissionsUpdateArgs>(args: SelectSubset<T, Roles_PermissionsUpdateArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Roles_Permissions.
     * @param {Roles_PermissionsDeleteManyArgs} args - Arguments to filter Roles_Permissions to delete.
     * @example
     * // Delete a few Roles_Permissions
     * const { count } = await prisma.roles_Permissions.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Roles_PermissionsDeleteManyArgs>(args?: SelectSubset<T, Roles_PermissionsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Roles_PermissionsUpdateManyArgs>(args: SelectSubset<T, Roles_PermissionsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Roles_Permissions and returns the data updated in the database.
     * @param {Roles_PermissionsUpdateManyAndReturnArgs} args - Arguments to update many Roles_Permissions.
     * @example
     * // Update many Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Roles_Permissions and only return the `roleId`
     * const roles_PermissionsWithRoleIdOnly = await prisma.roles_Permissions.updateManyAndReturn({
     *   select: { roleId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Roles_PermissionsUpdateManyAndReturnArgs>(args: SelectSubset<T, Roles_PermissionsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Roles_Permissions.
     * @param {Roles_PermissionsUpsertArgs} args - Arguments to update or create a Roles_Permissions.
     * @example
     * // Update or create a Roles_Permissions
     * const roles_Permissions = await prisma.roles_Permissions.upsert({
     *   create: {
     *     // ... data to create a Roles_Permissions
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Roles_Permissions we want to update
     *   }
     * })
     */
    upsert<T extends Roles_PermissionsUpsertArgs>(args: SelectSubset<T, Roles_PermissionsUpsertArgs<ExtArgs>>): Prisma__Roles_PermissionsClient<$Result.GetResult<Prisma.$Roles_PermissionsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Roles_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsCountArgs} args - Arguments to filter Roles_Permissions to count.
     * @example
     * // Count the number of Roles_Permissions
     * const count = await prisma.roles_Permissions.count({
     *   where: {
     *     // ... the filter for the Roles_Permissions we want to count
     *   }
     * })
    **/
    count<T extends Roles_PermissionsCountArgs>(
      args?: Subset<T, Roles_PermissionsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Roles_PermissionsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Roles_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Roles_PermissionsAggregateArgs>(args: Subset<T, Roles_PermissionsAggregateArgs>): Prisma.PrismaPromise<GetRoles_PermissionsAggregateType<T>>

    /**
     * Group by Roles_Permissions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Roles_PermissionsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Roles_PermissionsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Roles_PermissionsGroupByArgs['orderBy'] }
        : { orderBy?: Roles_PermissionsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Roles_PermissionsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRoles_PermissionsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Roles_Permissions model
   */
  readonly fields: Roles_PermissionsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Roles_Permissions.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Roles_PermissionsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    permission<T extends PermissionsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PermissionsDefaultArgs<ExtArgs>>): Prisma__PermissionsClient<$Result.GetResult<Prisma.$PermissionsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Roles_Permissions model
   */
  interface Roles_PermissionsFieldRefs {
    readonly roleId: FieldRef<"Roles_Permissions", 'String'>
    readonly permissionId: FieldRef<"Roles_Permissions", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Roles_Permissions findUnique
   */
  export type Roles_PermissionsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Roles_Permissions to fetch.
     */
    where: Roles_PermissionsWhereUniqueInput
  }

  /**
   * Roles_Permissions findUniqueOrThrow
   */
  export type Roles_PermissionsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Roles_Permissions to fetch.
     */
    where: Roles_PermissionsWhereUniqueInput
  }

  /**
   * Roles_Permissions findFirst
   */
  export type Roles_PermissionsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Roles_Permissions to fetch.
     */
    where?: Roles_PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles_Permissions to fetch.
     */
    orderBy?: Roles_PermissionsOrderByWithRelationInput | Roles_PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles_Permissions.
     */
    cursor?: Roles_PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles_Permissions.
     */
    distinct?: Roles_PermissionsScalarFieldEnum | Roles_PermissionsScalarFieldEnum[]
  }

  /**
   * Roles_Permissions findFirstOrThrow
   */
  export type Roles_PermissionsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Roles_Permissions to fetch.
     */
    where?: Roles_PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles_Permissions to fetch.
     */
    orderBy?: Roles_PermissionsOrderByWithRelationInput | Roles_PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Roles_Permissions.
     */
    cursor?: Roles_PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles_Permissions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Roles_Permissions.
     */
    distinct?: Roles_PermissionsScalarFieldEnum | Roles_PermissionsScalarFieldEnum[]
  }

  /**
   * Roles_Permissions findMany
   */
  export type Roles_PermissionsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * Filter, which Roles_Permissions to fetch.
     */
    where?: Roles_PermissionsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Roles_Permissions to fetch.
     */
    orderBy?: Roles_PermissionsOrderByWithRelationInput | Roles_PermissionsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Roles_Permissions.
     */
    cursor?: Roles_PermissionsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Roles_Permissions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Roles_Permissions.
     */
    skip?: number
    distinct?: Roles_PermissionsScalarFieldEnum | Roles_PermissionsScalarFieldEnum[]
  }

  /**
   * Roles_Permissions create
   */
  export type Roles_PermissionsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to create a Roles_Permissions.
     */
    data: XOR<Roles_PermissionsCreateInput, Roles_PermissionsUncheckedCreateInput>
  }

  /**
   * Roles_Permissions createMany
   */
  export type Roles_PermissionsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Roles_Permissions.
     */
    data: Roles_PermissionsCreateManyInput | Roles_PermissionsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Roles_Permissions createManyAndReturn
   */
  export type Roles_PermissionsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * The data used to create many Roles_Permissions.
     */
    data: Roles_PermissionsCreateManyInput | Roles_PermissionsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roles_Permissions update
   */
  export type Roles_PermissionsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * The data needed to update a Roles_Permissions.
     */
    data: XOR<Roles_PermissionsUpdateInput, Roles_PermissionsUncheckedUpdateInput>
    /**
     * Choose, which Roles_Permissions to update.
     */
    where: Roles_PermissionsWhereUniqueInput
  }

  /**
   * Roles_Permissions updateMany
   */
  export type Roles_PermissionsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Roles_Permissions.
     */
    data: XOR<Roles_PermissionsUpdateManyMutationInput, Roles_PermissionsUncheckedUpdateManyInput>
    /**
     * Filter which Roles_Permissions to update
     */
    where?: Roles_PermissionsWhereInput
    /**
     * Limit how many Roles_Permissions to update.
     */
    limit?: number
  }

  /**
   * Roles_Permissions updateManyAndReturn
   */
  export type Roles_PermissionsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * The data used to update Roles_Permissions.
     */
    data: XOR<Roles_PermissionsUpdateManyMutationInput, Roles_PermissionsUncheckedUpdateManyInput>
    /**
     * Filter which Roles_Permissions to update
     */
    where?: Roles_PermissionsWhereInput
    /**
     * Limit how many Roles_Permissions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Roles_Permissions upsert
   */
  export type Roles_PermissionsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * The filter to search for the Roles_Permissions to update in case it exists.
     */
    where: Roles_PermissionsWhereUniqueInput
    /**
     * In case the Roles_Permissions found by the `where` argument doesn't exist, create a new Roles_Permissions with this data.
     */
    create: XOR<Roles_PermissionsCreateInput, Roles_PermissionsUncheckedCreateInput>
    /**
     * In case the Roles_Permissions was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Roles_PermissionsUpdateInput, Roles_PermissionsUncheckedUpdateInput>
  }

  /**
   * Roles_Permissions delete
   */
  export type Roles_PermissionsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
    /**
     * Filter which Roles_Permissions to delete.
     */
    where: Roles_PermissionsWhereUniqueInput
  }

  /**
   * Roles_Permissions deleteMany
   */
  export type Roles_PermissionsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Roles_Permissions to delete
     */
    where?: Roles_PermissionsWhereInput
    /**
     * Limit how many Roles_Permissions to delete.
     */
    limit?: number
  }

  /**
   * Roles_Permissions without action
   */
  export type Roles_PermissionsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Roles_Permissions
     */
    select?: Roles_PermissionsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Roles_Permissions
     */
    omit?: Roles_PermissionsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Roles_PermissionsInclude<ExtArgs> | null
  }


  /**
   * Model Users_Roles
   */

  export type AggregateUsers_Roles = {
    _count: Users_RolesCountAggregateOutputType | null
    _min: Users_RolesMinAggregateOutputType | null
    _max: Users_RolesMaxAggregateOutputType | null
  }

  export type Users_RolesMinAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type Users_RolesMaxAggregateOutputType = {
    userId: string | null
    roleId: string | null
  }

  export type Users_RolesCountAggregateOutputType = {
    userId: number
    roleId: number
    _all: number
  }


  export type Users_RolesMinAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type Users_RolesMaxAggregateInputType = {
    userId?: true
    roleId?: true
  }

  export type Users_RolesCountAggregateInputType = {
    userId?: true
    roleId?: true
    _all?: true
  }

  export type Users_RolesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users_Roles to aggregate.
     */
    where?: Users_RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Roles to fetch.
     */
    orderBy?: Users_RolesOrderByWithRelationInput | Users_RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Users_RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users_Roles
    **/
    _count?: true | Users_RolesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Users_RolesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Users_RolesMaxAggregateInputType
  }

  export type GetUsers_RolesAggregateType<T extends Users_RolesAggregateArgs> = {
        [P in keyof T & keyof AggregateUsers_Roles]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUsers_Roles[P]>
      : GetScalarType<T[P], AggregateUsers_Roles[P]>
  }




  export type Users_RolesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Users_RolesWhereInput
    orderBy?: Users_RolesOrderByWithAggregationInput | Users_RolesOrderByWithAggregationInput[]
    by: Users_RolesScalarFieldEnum[] | Users_RolesScalarFieldEnum
    having?: Users_RolesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Users_RolesCountAggregateInputType | true
    _min?: Users_RolesMinAggregateInputType
    _max?: Users_RolesMaxAggregateInputType
  }

  export type Users_RolesGroupByOutputType = {
    userId: string
    roleId: string
    _count: Users_RolesCountAggregateOutputType | null
    _min: Users_RolesMinAggregateOutputType | null
    _max: Users_RolesMaxAggregateOutputType | null
  }

  type GetUsers_RolesGroupByPayload<T extends Users_RolesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Users_RolesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Users_RolesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Users_RolesGroupByOutputType[P]>
            : GetScalarType<T[P], Users_RolesGroupByOutputType[P]>
        }
      >
    >


  export type Users_RolesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_Roles"]>

  export type Users_RolesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_Roles"]>

  export type Users_RolesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    userId?: boolean
    roleId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["users_Roles"]>

  export type Users_RolesSelectScalar = {
    userId?: boolean
    roleId?: boolean
  }

  export type Users_RolesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"userId" | "roleId", ExtArgs["result"]["users_Roles"]>
  export type Users_RolesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type Users_RolesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }
  export type Users_RolesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    role?: boolean | RoleDefaultArgs<ExtArgs>
  }

  export type $Users_RolesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Users_Roles"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      role: Prisma.$RolePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      userId: string
      roleId: string
    }, ExtArgs["result"]["users_Roles"]>
    composites: {}
  }

  type Users_RolesGetPayload<S extends boolean | null | undefined | Users_RolesDefaultArgs> = $Result.GetResult<Prisma.$Users_RolesPayload, S>

  type Users_RolesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Users_RolesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Users_RolesCountAggregateInputType | true
    }

  export interface Users_RolesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Users_Roles'], meta: { name: 'Users_Roles' } }
    /**
     * Find zero or one Users_Roles that matches the filter.
     * @param {Users_RolesFindUniqueArgs} args - Arguments to find a Users_Roles
     * @example
     * // Get one Users_Roles
     * const users_Roles = await prisma.users_Roles.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Users_RolesFindUniqueArgs>(args: SelectSubset<T, Users_RolesFindUniqueArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Users_Roles that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Users_RolesFindUniqueOrThrowArgs} args - Arguments to find a Users_Roles
     * @example
     * // Get one Users_Roles
     * const users_Roles = await prisma.users_Roles.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Users_RolesFindUniqueOrThrowArgs>(args: SelectSubset<T, Users_RolesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesFindFirstArgs} args - Arguments to find a Users_Roles
     * @example
     * // Get one Users_Roles
     * const users_Roles = await prisma.users_Roles.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Users_RolesFindFirstArgs>(args?: SelectSubset<T, Users_RolesFindFirstArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Users_Roles that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesFindFirstOrThrowArgs} args - Arguments to find a Users_Roles
     * @example
     * // Get one Users_Roles
     * const users_Roles = await prisma.users_Roles.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Users_RolesFindFirstOrThrowArgs>(args?: SelectSubset<T, Users_RolesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users_Roles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users_Roles
     * const users_Roles = await prisma.users_Roles.findMany()
     * 
     * // Get first 10 Users_Roles
     * const users_Roles = await prisma.users_Roles.findMany({ take: 10 })
     * 
     * // Only select the `userId`
     * const users_RolesWithUserIdOnly = await prisma.users_Roles.findMany({ select: { userId: true } })
     * 
     */
    findMany<T extends Users_RolesFindManyArgs>(args?: SelectSubset<T, Users_RolesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Users_Roles.
     * @param {Users_RolesCreateArgs} args - Arguments to create a Users_Roles.
     * @example
     * // Create one Users_Roles
     * const Users_Roles = await prisma.users_Roles.create({
     *   data: {
     *     // ... data to create a Users_Roles
     *   }
     * })
     * 
     */
    create<T extends Users_RolesCreateArgs>(args: SelectSubset<T, Users_RolesCreateArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users_Roles.
     * @param {Users_RolesCreateManyArgs} args - Arguments to create many Users_Roles.
     * @example
     * // Create many Users_Roles
     * const users_Roles = await prisma.users_Roles.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Users_RolesCreateManyArgs>(args?: SelectSubset<T, Users_RolesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users_Roles and returns the data saved in the database.
     * @param {Users_RolesCreateManyAndReturnArgs} args - Arguments to create many Users_Roles.
     * @example
     * // Create many Users_Roles
     * const users_Roles = await prisma.users_Roles.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users_Roles and only return the `userId`
     * const users_RolesWithUserIdOnly = await prisma.users_Roles.createManyAndReturn({
     *   select: { userId: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Users_RolesCreateManyAndReturnArgs>(args?: SelectSubset<T, Users_RolesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Users_Roles.
     * @param {Users_RolesDeleteArgs} args - Arguments to delete one Users_Roles.
     * @example
     * // Delete one Users_Roles
     * const Users_Roles = await prisma.users_Roles.delete({
     *   where: {
     *     // ... filter to delete one Users_Roles
     *   }
     * })
     * 
     */
    delete<T extends Users_RolesDeleteArgs>(args: SelectSubset<T, Users_RolesDeleteArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Users_Roles.
     * @param {Users_RolesUpdateArgs} args - Arguments to update one Users_Roles.
     * @example
     * // Update one Users_Roles
     * const users_Roles = await prisma.users_Roles.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Users_RolesUpdateArgs>(args: SelectSubset<T, Users_RolesUpdateArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users_Roles.
     * @param {Users_RolesDeleteManyArgs} args - Arguments to filter Users_Roles to delete.
     * @example
     * // Delete a few Users_Roles
     * const { count } = await prisma.users_Roles.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Users_RolesDeleteManyArgs>(args?: SelectSubset<T, Users_RolesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users_Roles
     * const users_Roles = await prisma.users_Roles.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Users_RolesUpdateManyArgs>(args: SelectSubset<T, Users_RolesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users_Roles and returns the data updated in the database.
     * @param {Users_RolesUpdateManyAndReturnArgs} args - Arguments to update many Users_Roles.
     * @example
     * // Update many Users_Roles
     * const users_Roles = await prisma.users_Roles.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users_Roles and only return the `userId`
     * const users_RolesWithUserIdOnly = await prisma.users_Roles.updateManyAndReturn({
     *   select: { userId: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Users_RolesUpdateManyAndReturnArgs>(args: SelectSubset<T, Users_RolesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Users_Roles.
     * @param {Users_RolesUpsertArgs} args - Arguments to update or create a Users_Roles.
     * @example
     * // Update or create a Users_Roles
     * const users_Roles = await prisma.users_Roles.upsert({
     *   create: {
     *     // ... data to create a Users_Roles
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Users_Roles we want to update
     *   }
     * })
     */
    upsert<T extends Users_RolesUpsertArgs>(args: SelectSubset<T, Users_RolesUpsertArgs<ExtArgs>>): Prisma__Users_RolesClient<$Result.GetResult<Prisma.$Users_RolesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesCountArgs} args - Arguments to filter Users_Roles to count.
     * @example
     * // Count the number of Users_Roles
     * const count = await prisma.users_Roles.count({
     *   where: {
     *     // ... the filter for the Users_Roles we want to count
     *   }
     * })
    **/
    count<T extends Users_RolesCountArgs>(
      args?: Subset<T, Users_RolesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Users_RolesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Users_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Users_RolesAggregateArgs>(args: Subset<T, Users_RolesAggregateArgs>): Prisma.PrismaPromise<GetUsers_RolesAggregateType<T>>

    /**
     * Group by Users_Roles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Users_RolesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Users_RolesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Users_RolesGroupByArgs['orderBy'] }
        : { orderBy?: Users_RolesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Users_RolesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUsers_RolesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Users_Roles model
   */
  readonly fields: Users_RolesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Users_Roles.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Users_RolesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    role<T extends RoleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, RoleDefaultArgs<ExtArgs>>): Prisma__RoleClient<$Result.GetResult<Prisma.$RolePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Users_Roles model
   */
  interface Users_RolesFieldRefs {
    readonly userId: FieldRef<"Users_Roles", 'String'>
    readonly roleId: FieldRef<"Users_Roles", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Users_Roles findUnique
   */
  export type Users_RolesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Roles to fetch.
     */
    where: Users_RolesWhereUniqueInput
  }

  /**
   * Users_Roles findUniqueOrThrow
   */
  export type Users_RolesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Roles to fetch.
     */
    where: Users_RolesWhereUniqueInput
  }

  /**
   * Users_Roles findFirst
   */
  export type Users_RolesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Roles to fetch.
     */
    where?: Users_RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Roles to fetch.
     */
    orderBy?: Users_RolesOrderByWithRelationInput | Users_RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_Roles.
     */
    cursor?: Users_RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_Roles.
     */
    distinct?: Users_RolesScalarFieldEnum | Users_RolesScalarFieldEnum[]
  }

  /**
   * Users_Roles findFirstOrThrow
   */
  export type Users_RolesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Roles to fetch.
     */
    where?: Users_RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Roles to fetch.
     */
    orderBy?: Users_RolesOrderByWithRelationInput | Users_RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users_Roles.
     */
    cursor?: Users_RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Roles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users_Roles.
     */
    distinct?: Users_RolesScalarFieldEnum | Users_RolesScalarFieldEnum[]
  }

  /**
   * Users_Roles findMany
   */
  export type Users_RolesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * Filter, which Users_Roles to fetch.
     */
    where?: Users_RolesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users_Roles to fetch.
     */
    orderBy?: Users_RolesOrderByWithRelationInput | Users_RolesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users_Roles.
     */
    cursor?: Users_RolesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users_Roles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users_Roles.
     */
    skip?: number
    distinct?: Users_RolesScalarFieldEnum | Users_RolesScalarFieldEnum[]
  }

  /**
   * Users_Roles create
   */
  export type Users_RolesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * The data needed to create a Users_Roles.
     */
    data: XOR<Users_RolesCreateInput, Users_RolesUncheckedCreateInput>
  }

  /**
   * Users_Roles createMany
   */
  export type Users_RolesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users_Roles.
     */
    data: Users_RolesCreateManyInput | Users_RolesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Users_Roles createManyAndReturn
   */
  export type Users_RolesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * The data used to create many Users_Roles.
     */
    data: Users_RolesCreateManyInput | Users_RolesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users_Roles update
   */
  export type Users_RolesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * The data needed to update a Users_Roles.
     */
    data: XOR<Users_RolesUpdateInput, Users_RolesUncheckedUpdateInput>
    /**
     * Choose, which Users_Roles to update.
     */
    where: Users_RolesWhereUniqueInput
  }

  /**
   * Users_Roles updateMany
   */
  export type Users_RolesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users_Roles.
     */
    data: XOR<Users_RolesUpdateManyMutationInput, Users_RolesUncheckedUpdateManyInput>
    /**
     * Filter which Users_Roles to update
     */
    where?: Users_RolesWhereInput
    /**
     * Limit how many Users_Roles to update.
     */
    limit?: number
  }

  /**
   * Users_Roles updateManyAndReturn
   */
  export type Users_RolesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * The data used to update Users_Roles.
     */
    data: XOR<Users_RolesUpdateManyMutationInput, Users_RolesUncheckedUpdateManyInput>
    /**
     * Filter which Users_Roles to update
     */
    where?: Users_RolesWhereInput
    /**
     * Limit how many Users_Roles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Users_Roles upsert
   */
  export type Users_RolesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * The filter to search for the Users_Roles to update in case it exists.
     */
    where: Users_RolesWhereUniqueInput
    /**
     * In case the Users_Roles found by the `where` argument doesn't exist, create a new Users_Roles with this data.
     */
    create: XOR<Users_RolesCreateInput, Users_RolesUncheckedCreateInput>
    /**
     * In case the Users_Roles was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Users_RolesUpdateInput, Users_RolesUncheckedUpdateInput>
  }

  /**
   * Users_Roles delete
   */
  export type Users_RolesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
    /**
     * Filter which Users_Roles to delete.
     */
    where: Users_RolesWhereUniqueInput
  }

  /**
   * Users_Roles deleteMany
   */
  export type Users_RolesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users_Roles to delete
     */
    where?: Users_RolesWhereInput
    /**
     * Limit how many Users_Roles to delete.
     */
    limit?: number
  }

  /**
   * Users_Roles without action
   */
  export type Users_RolesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Users_Roles
     */
    select?: Users_RolesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Users_Roles
     */
    omit?: Users_RolesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Users_RolesInclude<ExtArgs> | null
  }


  /**
   * Model Contracts
   */

  export type AggregateContracts = {
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  export type ContractsAvgAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type ContractsSumAggregateOutputType = {
    totalAmount: Decimal | null
  }

  export type ContractsMinAggregateOutputType = {
    id: string | null
    contractCode: string | null
    title: string | null
    type: string | null
    status: string | null
    totalAmount: Decimal | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractsMaxAggregateOutputType = {
    id: string | null
    contractCode: string | null
    title: string | null
    type: string | null
    status: string | null
    totalAmount: Decimal | null
    createdById: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ContractsCountAggregateOutputType = {
    id: number
    contractCode: number
    title: number
    type: number
    status: number
    totalAmount: number
    createdById: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ContractsAvgAggregateInputType = {
    totalAmount?: true
  }

  export type ContractsSumAggregateInputType = {
    totalAmount?: true
  }

  export type ContractsMinAggregateInputType = {
    id?: true
    contractCode?: true
    title?: true
    type?: true
    status?: true
    totalAmount?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractsMaxAggregateInputType = {
    id?: true
    contractCode?: true
    title?: true
    type?: true
    status?: true
    totalAmount?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ContractsCountAggregateInputType = {
    id?: true
    contractCode?: true
    title?: true
    type?: true
    status?: true
    totalAmount?: true
    createdById?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ContractsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to aggregate.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contracts
    **/
    _count?: true | ContractsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ContractsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ContractsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ContractsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ContractsMaxAggregateInputType
  }

  export type GetContractsAggregateType<T extends ContractsAggregateArgs> = {
        [P in keyof T & keyof AggregateContracts]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContracts[P]>
      : GetScalarType<T[P], AggregateContracts[P]>
  }




  export type ContractsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ContractsWhereInput
    orderBy?: ContractsOrderByWithAggregationInput | ContractsOrderByWithAggregationInput[]
    by: ContractsScalarFieldEnum[] | ContractsScalarFieldEnum
    having?: ContractsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ContractsCountAggregateInputType | true
    _avg?: ContractsAvgAggregateInputType
    _sum?: ContractsSumAggregateInputType
    _min?: ContractsMinAggregateInputType
    _max?: ContractsMaxAggregateInputType
  }

  export type ContractsGroupByOutputType = {
    id: string
    contractCode: string
    title: string
    type: string
    status: string
    totalAmount: Decimal | null
    createdById: string
    createdAt: Date
    updatedAt: Date
    _count: ContractsCountAggregateOutputType | null
    _avg: ContractsAvgAggregateOutputType | null
    _sum: ContractsSumAggregateOutputType | null
    _min: ContractsMinAggregateOutputType | null
    _max: ContractsMaxAggregateOutputType | null
  }

  type GetContractsGroupByPayload<T extends ContractsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ContractsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ContractsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ContractsGroupByOutputType[P]>
            : GetScalarType<T[P], ContractsGroupByOutputType[P]>
        }
      >
    >


  export type ContractsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractCode?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    totalAmount?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
    renewals?: boolean | Contracts$renewalsArgs<ExtArgs>
    cskhNotes?: boolean | Contracts$cskhNotesArgs<ExtArgs>
    files?: boolean | Contracts$filesArgs<ExtArgs>
    _count?: boolean | ContractsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contracts"]>

  export type ContractsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractCode?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    totalAmount?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contracts"]>

  export type ContractsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractCode?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    totalAmount?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contracts"]>

  export type ContractsSelectScalar = {
    id?: boolean
    contractCode?: boolean
    title?: boolean
    type?: boolean
    status?: boolean
    totalAmount?: boolean
    createdById?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ContractsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractCode" | "title" | "type" | "status" | "totalAmount" | "createdById" | "createdAt" | "updatedAt", ExtArgs["result"]["contracts"]>
  export type ContractsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
    renewals?: boolean | Contracts$renewalsArgs<ExtArgs>
    cskhNotes?: boolean | Contracts$cskhNotesArgs<ExtArgs>
    files?: boolean | Contracts$filesArgs<ExtArgs>
    _count?: boolean | ContractsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ContractsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ContractsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ContractsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contracts"
    objects: {
      creator: Prisma.$UserPayload<ExtArgs>
      renewals: Prisma.$Contract_RenewalsPayload<ExtArgs>[]
      cskhNotes: Prisma.$Customer_Care_NotesPayload<ExtArgs>[]
      files: Prisma.$FilesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractCode: string
      title: string
      type: string
      status: string
      totalAmount: Prisma.Decimal | null
      createdById: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["contracts"]>
    composites: {}
  }

  type ContractsGetPayload<S extends boolean | null | undefined | ContractsDefaultArgs> = $Result.GetResult<Prisma.$ContractsPayload, S>

  type ContractsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ContractsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ContractsCountAggregateInputType | true
    }

  export interface ContractsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contracts'], meta: { name: 'Contracts' } }
    /**
     * Find zero or one Contracts that matches the filter.
     * @param {ContractsFindUniqueArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ContractsFindUniqueArgs>(args: SelectSubset<T, ContractsFindUniqueArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contracts that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ContractsFindUniqueOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ContractsFindUniqueOrThrowArgs>(args: SelectSubset<T, ContractsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindFirstArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ContractsFindFirstArgs>(args?: SelectSubset<T, ContractsFindFirstArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contracts that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindFirstOrThrowArgs} args - Arguments to find a Contracts
     * @example
     * // Get one Contracts
     * const contracts = await prisma.contracts.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ContractsFindFirstOrThrowArgs>(args?: SelectSubset<T, ContractsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contracts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contracts
     * const contracts = await prisma.contracts.findMany()
     * 
     * // Get first 10 Contracts
     * const contracts = await prisma.contracts.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contractsWithIdOnly = await prisma.contracts.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ContractsFindManyArgs>(args?: SelectSubset<T, ContractsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contracts.
     * @param {ContractsCreateArgs} args - Arguments to create a Contracts.
     * @example
     * // Create one Contracts
     * const Contracts = await prisma.contracts.create({
     *   data: {
     *     // ... data to create a Contracts
     *   }
     * })
     * 
     */
    create<T extends ContractsCreateArgs>(args: SelectSubset<T, ContractsCreateArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contracts.
     * @param {ContractsCreateManyArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ContractsCreateManyArgs>(args?: SelectSubset<T, ContractsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contracts and returns the data saved in the database.
     * @param {ContractsCreateManyAndReturnArgs} args - Arguments to create many Contracts.
     * @example
     * // Create many Contracts
     * const contracts = await prisma.contracts.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contracts and only return the `id`
     * const contractsWithIdOnly = await prisma.contracts.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ContractsCreateManyAndReturnArgs>(args?: SelectSubset<T, ContractsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contracts.
     * @param {ContractsDeleteArgs} args - Arguments to delete one Contracts.
     * @example
     * // Delete one Contracts
     * const Contracts = await prisma.contracts.delete({
     *   where: {
     *     // ... filter to delete one Contracts
     *   }
     * })
     * 
     */
    delete<T extends ContractsDeleteArgs>(args: SelectSubset<T, ContractsDeleteArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contracts.
     * @param {ContractsUpdateArgs} args - Arguments to update one Contracts.
     * @example
     * // Update one Contracts
     * const contracts = await prisma.contracts.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ContractsUpdateArgs>(args: SelectSubset<T, ContractsUpdateArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contracts.
     * @param {ContractsDeleteManyArgs} args - Arguments to filter Contracts to delete.
     * @example
     * // Delete a few Contracts
     * const { count } = await prisma.contracts.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ContractsDeleteManyArgs>(args?: SelectSubset<T, ContractsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ContractsUpdateManyArgs>(args: SelectSubset<T, ContractsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contracts and returns the data updated in the database.
     * @param {ContractsUpdateManyAndReturnArgs} args - Arguments to update many Contracts.
     * @example
     * // Update many Contracts
     * const contracts = await prisma.contracts.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contracts and only return the `id`
     * const contractsWithIdOnly = await prisma.contracts.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ContractsUpdateManyAndReturnArgs>(args: SelectSubset<T, ContractsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contracts.
     * @param {ContractsUpsertArgs} args - Arguments to update or create a Contracts.
     * @example
     * // Update or create a Contracts
     * const contracts = await prisma.contracts.upsert({
     *   create: {
     *     // ... data to create a Contracts
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contracts we want to update
     *   }
     * })
     */
    upsert<T extends ContractsUpsertArgs>(args: SelectSubset<T, ContractsUpsertArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsCountArgs} args - Arguments to filter Contracts to count.
     * @example
     * // Count the number of Contracts
     * const count = await prisma.contracts.count({
     *   where: {
     *     // ... the filter for the Contracts we want to count
     *   }
     * })
    **/
    count<T extends ContractsCountArgs>(
      args?: Subset<T, ContractsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ContractsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ContractsAggregateArgs>(args: Subset<T, ContractsAggregateArgs>): Prisma.PrismaPromise<GetContractsAggregateType<T>>

    /**
     * Group by Contracts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ContractsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ContractsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ContractsGroupByArgs['orderBy'] }
        : { orderBy?: ContractsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ContractsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContractsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contracts model
   */
  readonly fields: ContractsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contracts.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ContractsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    renewals<T extends Contracts$renewalsArgs<ExtArgs> = {}>(args?: Subset<T, Contracts$renewalsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    cskhNotes<T extends Contracts$cskhNotesArgs<ExtArgs> = {}>(args?: Subset<T, Contracts$cskhNotesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    files<T extends Contracts$filesArgs<ExtArgs> = {}>(args?: Subset<T, Contracts$filesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FilesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contracts model
   */
  interface ContractsFieldRefs {
    readonly id: FieldRef<"Contracts", 'String'>
    readonly contractCode: FieldRef<"Contracts", 'String'>
    readonly title: FieldRef<"Contracts", 'String'>
    readonly type: FieldRef<"Contracts", 'String'>
    readonly status: FieldRef<"Contracts", 'String'>
    readonly totalAmount: FieldRef<"Contracts", 'Decimal'>
    readonly createdById: FieldRef<"Contracts", 'String'>
    readonly createdAt: FieldRef<"Contracts", 'DateTime'>
    readonly updatedAt: FieldRef<"Contracts", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contracts findUnique
   */
  export type ContractsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts findUniqueOrThrow
   */
  export type ContractsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts findFirst
   */
  export type ContractsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts findFirstOrThrow
   */
  export type ContractsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contracts.
     */
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts findMany
   */
  export type ContractsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter, which Contracts to fetch.
     */
    where?: ContractsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contracts to fetch.
     */
    orderBy?: ContractsOrderByWithRelationInput | ContractsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contracts.
     */
    cursor?: ContractsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contracts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contracts.
     */
    skip?: number
    distinct?: ContractsScalarFieldEnum | ContractsScalarFieldEnum[]
  }

  /**
   * Contracts create
   */
  export type ContractsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contracts.
     */
    data: XOR<ContractsCreateInput, ContractsUncheckedCreateInput>
  }

  /**
   * Contracts createMany
   */
  export type ContractsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contracts.
     */
    data: ContractsCreateManyInput | ContractsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contracts createManyAndReturn
   */
  export type ContractsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * The data used to create many Contracts.
     */
    data: ContractsCreateManyInput | ContractsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contracts update
   */
  export type ContractsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contracts.
     */
    data: XOR<ContractsUpdateInput, ContractsUncheckedUpdateInput>
    /**
     * Choose, which Contracts to update.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts updateMany
   */
  export type ContractsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractsUpdateManyMutationInput, ContractsUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
  }

  /**
   * Contracts updateManyAndReturn
   */
  export type ContractsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * The data used to update Contracts.
     */
    data: XOR<ContractsUpdateManyMutationInput, ContractsUncheckedUpdateManyInput>
    /**
     * Filter which Contracts to update
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contracts upsert
   */
  export type ContractsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contracts to update in case it exists.
     */
    where: ContractsWhereUniqueInput
    /**
     * In case the Contracts found by the `where` argument doesn't exist, create a new Contracts with this data.
     */
    create: XOR<ContractsCreateInput, ContractsUncheckedCreateInput>
    /**
     * In case the Contracts was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ContractsUpdateInput, ContractsUncheckedUpdateInput>
  }

  /**
   * Contracts delete
   */
  export type ContractsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
    /**
     * Filter which Contracts to delete.
     */
    where: ContractsWhereUniqueInput
  }

  /**
   * Contracts deleteMany
   */
  export type ContractsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contracts to delete
     */
    where?: ContractsWhereInput
    /**
     * Limit how many Contracts to delete.
     */
    limit?: number
  }

  /**
   * Contracts.renewals
   */
  export type Contracts$renewalsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    where?: Contract_RenewalsWhereInput
    orderBy?: Contract_RenewalsOrderByWithRelationInput | Contract_RenewalsOrderByWithRelationInput[]
    cursor?: Contract_RenewalsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Contract_RenewalsScalarFieldEnum | Contract_RenewalsScalarFieldEnum[]
  }

  /**
   * Contracts.cskhNotes
   */
  export type Contracts$cskhNotesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    where?: Customer_Care_NotesWhereInput
    orderBy?: Customer_Care_NotesOrderByWithRelationInput | Customer_Care_NotesOrderByWithRelationInput[]
    cursor?: Customer_Care_NotesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Customer_Care_NotesScalarFieldEnum | Customer_Care_NotesScalarFieldEnum[]
  }

  /**
   * Contracts.files
   */
  export type Contracts$filesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Files
     */
    select?: FilesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Files
     */
    omit?: FilesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FilesInclude<ExtArgs> | null
    where?: FilesWhereInput
    orderBy?: FilesOrderByWithRelationInput | FilesOrderByWithRelationInput[]
    cursor?: FilesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FilesScalarFieldEnum | FilesScalarFieldEnum[]
  }

  /**
   * Contracts without action
   */
  export type ContractsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contracts
     */
    select?: ContractsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contracts
     */
    omit?: ContractsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ContractsInclude<ExtArgs> | null
  }


  /**
   * Model Import_History
   */

  export type AggregateImport_History = {
    _count: Import_HistoryCountAggregateOutputType | null
    _avg: Import_HistoryAvgAggregateOutputType | null
    _sum: Import_HistorySumAggregateOutputType | null
    _min: Import_HistoryMinAggregateOutputType | null
    _max: Import_HistoryMaxAggregateOutputType | null
  }

  export type Import_HistoryAvgAggregateOutputType = {
    totalRows: number | null
    successRows: number | null
    failedRows: number | null
  }

  export type Import_HistorySumAggregateOutputType = {
    totalRows: number | null
    successRows: number | null
    failedRows: number | null
  }

  export type Import_HistoryMinAggregateOutputType = {
    id: string | null
    fileName: string | null
    uploadById: string | null
    module: string | null
    totalRows: number | null
    successRows: number | null
    failedRows: number | null
    status: string | null
    createdAt: Date | null
  }

  export type Import_HistoryMaxAggregateOutputType = {
    id: string | null
    fileName: string | null
    uploadById: string | null
    module: string | null
    totalRows: number | null
    successRows: number | null
    failedRows: number | null
    status: string | null
    createdAt: Date | null
  }

  export type Import_HistoryCountAggregateOutputType = {
    id: number
    fileName: number
    uploadById: number
    module: number
    totalRows: number
    successRows: number
    failedRows: number
    status: number
    errorLog: number
    createdAt: number
    _all: number
  }


  export type Import_HistoryAvgAggregateInputType = {
    totalRows?: true
    successRows?: true
    failedRows?: true
  }

  export type Import_HistorySumAggregateInputType = {
    totalRows?: true
    successRows?: true
    failedRows?: true
  }

  export type Import_HistoryMinAggregateInputType = {
    id?: true
    fileName?: true
    uploadById?: true
    module?: true
    totalRows?: true
    successRows?: true
    failedRows?: true
    status?: true
    createdAt?: true
  }

  export type Import_HistoryMaxAggregateInputType = {
    id?: true
    fileName?: true
    uploadById?: true
    module?: true
    totalRows?: true
    successRows?: true
    failedRows?: true
    status?: true
    createdAt?: true
  }

  export type Import_HistoryCountAggregateInputType = {
    id?: true
    fileName?: true
    uploadById?: true
    module?: true
    totalRows?: true
    successRows?: true
    failedRows?: true
    status?: true
    errorLog?: true
    createdAt?: true
    _all?: true
  }

  export type Import_HistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Import_History to aggregate.
     */
    where?: Import_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Import_Histories to fetch.
     */
    orderBy?: Import_HistoryOrderByWithRelationInput | Import_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Import_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Import_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Import_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Import_Histories
    **/
    _count?: true | Import_HistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: Import_HistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: Import_HistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Import_HistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Import_HistoryMaxAggregateInputType
  }

  export type GetImport_HistoryAggregateType<T extends Import_HistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateImport_History]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateImport_History[P]>
      : GetScalarType<T[P], AggregateImport_History[P]>
  }




  export type Import_HistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Import_HistoryWhereInput
    orderBy?: Import_HistoryOrderByWithAggregationInput | Import_HistoryOrderByWithAggregationInput[]
    by: Import_HistoryScalarFieldEnum[] | Import_HistoryScalarFieldEnum
    having?: Import_HistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Import_HistoryCountAggregateInputType | true
    _avg?: Import_HistoryAvgAggregateInputType
    _sum?: Import_HistorySumAggregateInputType
    _min?: Import_HistoryMinAggregateInputType
    _max?: Import_HistoryMaxAggregateInputType
  }

  export type Import_HistoryGroupByOutputType = {
    id: string
    fileName: string
    uploadById: string
    module: string
    totalRows: number
    successRows: number
    failedRows: number
    status: string
    errorLog: JsonValue | null
    createdAt: Date
    _count: Import_HistoryCountAggregateOutputType | null
    _avg: Import_HistoryAvgAggregateOutputType | null
    _sum: Import_HistorySumAggregateOutputType | null
    _min: Import_HistoryMinAggregateOutputType | null
    _max: Import_HistoryMaxAggregateOutputType | null
  }

  type GetImport_HistoryGroupByPayload<T extends Import_HistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Import_HistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Import_HistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Import_HistoryGroupByOutputType[P]>
            : GetScalarType<T[P], Import_HistoryGroupByOutputType[P]>
        }
      >
    >


  export type Import_HistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    uploadById?: boolean
    module?: boolean
    totalRows?: boolean
    successRows?: boolean
    failedRows?: boolean
    status?: boolean
    errorLog?: boolean
    createdAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["import_History"]>

  export type Import_HistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    uploadById?: boolean
    module?: boolean
    totalRows?: boolean
    successRows?: boolean
    failedRows?: boolean
    status?: boolean
    errorLog?: boolean
    createdAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["import_History"]>

  export type Import_HistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileName?: boolean
    uploadById?: boolean
    module?: boolean
    totalRows?: boolean
    successRows?: boolean
    failedRows?: boolean
    status?: boolean
    errorLog?: boolean
    createdAt?: boolean
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["import_History"]>

  export type Import_HistorySelectScalar = {
    id?: boolean
    fileName?: boolean
    uploadById?: boolean
    module?: boolean
    totalRows?: boolean
    successRows?: boolean
    failedRows?: boolean
    status?: boolean
    errorLog?: boolean
    createdAt?: boolean
  }

  export type Import_HistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileName" | "uploadById" | "module" | "totalRows" | "successRows" | "failedRows" | "status" | "errorLog" | "createdAt", ExtArgs["result"]["import_History"]>
  export type Import_HistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Import_HistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Import_HistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    uploader?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Import_HistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Import_History"
    objects: {
      uploader: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileName: string
      uploadById: string
      module: string
      totalRows: number
      successRows: number
      failedRows: number
      status: string
      errorLog: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["import_History"]>
    composites: {}
  }

  type Import_HistoryGetPayload<S extends boolean | null | undefined | Import_HistoryDefaultArgs> = $Result.GetResult<Prisma.$Import_HistoryPayload, S>

  type Import_HistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Import_HistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Import_HistoryCountAggregateInputType | true
    }

  export interface Import_HistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Import_History'], meta: { name: 'Import_History' } }
    /**
     * Find zero or one Import_History that matches the filter.
     * @param {Import_HistoryFindUniqueArgs} args - Arguments to find a Import_History
     * @example
     * // Get one Import_History
     * const import_History = await prisma.import_History.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Import_HistoryFindUniqueArgs>(args: SelectSubset<T, Import_HistoryFindUniqueArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Import_History that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Import_HistoryFindUniqueOrThrowArgs} args - Arguments to find a Import_History
     * @example
     * // Get one Import_History
     * const import_History = await prisma.import_History.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Import_HistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, Import_HistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Import_History that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryFindFirstArgs} args - Arguments to find a Import_History
     * @example
     * // Get one Import_History
     * const import_History = await prisma.import_History.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Import_HistoryFindFirstArgs>(args?: SelectSubset<T, Import_HistoryFindFirstArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Import_History that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryFindFirstOrThrowArgs} args - Arguments to find a Import_History
     * @example
     * // Get one Import_History
     * const import_History = await prisma.import_History.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Import_HistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, Import_HistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Import_Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Import_Histories
     * const import_Histories = await prisma.import_History.findMany()
     * 
     * // Get first 10 Import_Histories
     * const import_Histories = await prisma.import_History.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const import_HistoryWithIdOnly = await prisma.import_History.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Import_HistoryFindManyArgs>(args?: SelectSubset<T, Import_HistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Import_History.
     * @param {Import_HistoryCreateArgs} args - Arguments to create a Import_History.
     * @example
     * // Create one Import_History
     * const Import_History = await prisma.import_History.create({
     *   data: {
     *     // ... data to create a Import_History
     *   }
     * })
     * 
     */
    create<T extends Import_HistoryCreateArgs>(args: SelectSubset<T, Import_HistoryCreateArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Import_Histories.
     * @param {Import_HistoryCreateManyArgs} args - Arguments to create many Import_Histories.
     * @example
     * // Create many Import_Histories
     * const import_History = await prisma.import_History.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Import_HistoryCreateManyArgs>(args?: SelectSubset<T, Import_HistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Import_Histories and returns the data saved in the database.
     * @param {Import_HistoryCreateManyAndReturnArgs} args - Arguments to create many Import_Histories.
     * @example
     * // Create many Import_Histories
     * const import_History = await prisma.import_History.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Import_Histories and only return the `id`
     * const import_HistoryWithIdOnly = await prisma.import_History.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Import_HistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, Import_HistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Import_History.
     * @param {Import_HistoryDeleteArgs} args - Arguments to delete one Import_History.
     * @example
     * // Delete one Import_History
     * const Import_History = await prisma.import_History.delete({
     *   where: {
     *     // ... filter to delete one Import_History
     *   }
     * })
     * 
     */
    delete<T extends Import_HistoryDeleteArgs>(args: SelectSubset<T, Import_HistoryDeleteArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Import_History.
     * @param {Import_HistoryUpdateArgs} args - Arguments to update one Import_History.
     * @example
     * // Update one Import_History
     * const import_History = await prisma.import_History.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Import_HistoryUpdateArgs>(args: SelectSubset<T, Import_HistoryUpdateArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Import_Histories.
     * @param {Import_HistoryDeleteManyArgs} args - Arguments to filter Import_Histories to delete.
     * @example
     * // Delete a few Import_Histories
     * const { count } = await prisma.import_History.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Import_HistoryDeleteManyArgs>(args?: SelectSubset<T, Import_HistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Import_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Import_Histories
     * const import_History = await prisma.import_History.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Import_HistoryUpdateManyArgs>(args: SelectSubset<T, Import_HistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Import_Histories and returns the data updated in the database.
     * @param {Import_HistoryUpdateManyAndReturnArgs} args - Arguments to update many Import_Histories.
     * @example
     * // Update many Import_Histories
     * const import_History = await prisma.import_History.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Import_Histories and only return the `id`
     * const import_HistoryWithIdOnly = await prisma.import_History.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Import_HistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, Import_HistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Import_History.
     * @param {Import_HistoryUpsertArgs} args - Arguments to update or create a Import_History.
     * @example
     * // Update or create a Import_History
     * const import_History = await prisma.import_History.upsert({
     *   create: {
     *     // ... data to create a Import_History
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Import_History we want to update
     *   }
     * })
     */
    upsert<T extends Import_HistoryUpsertArgs>(args: SelectSubset<T, Import_HistoryUpsertArgs<ExtArgs>>): Prisma__Import_HistoryClient<$Result.GetResult<Prisma.$Import_HistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Import_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryCountArgs} args - Arguments to filter Import_Histories to count.
     * @example
     * // Count the number of Import_Histories
     * const count = await prisma.import_History.count({
     *   where: {
     *     // ... the filter for the Import_Histories we want to count
     *   }
     * })
    **/
    count<T extends Import_HistoryCountArgs>(
      args?: Subset<T, Import_HistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Import_HistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Import_History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Import_HistoryAggregateArgs>(args: Subset<T, Import_HistoryAggregateArgs>): Prisma.PrismaPromise<GetImport_HistoryAggregateType<T>>

    /**
     * Group by Import_History.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Import_HistoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Import_HistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Import_HistoryGroupByArgs['orderBy'] }
        : { orderBy?: Import_HistoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Import_HistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetImport_HistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Import_History model
   */
  readonly fields: Import_HistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Import_History.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Import_HistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    uploader<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Import_History model
   */
  interface Import_HistoryFieldRefs {
    readonly id: FieldRef<"Import_History", 'String'>
    readonly fileName: FieldRef<"Import_History", 'String'>
    readonly uploadById: FieldRef<"Import_History", 'String'>
    readonly module: FieldRef<"Import_History", 'String'>
    readonly totalRows: FieldRef<"Import_History", 'Int'>
    readonly successRows: FieldRef<"Import_History", 'Int'>
    readonly failedRows: FieldRef<"Import_History", 'Int'>
    readonly status: FieldRef<"Import_History", 'String'>
    readonly errorLog: FieldRef<"Import_History", 'Json'>
    readonly createdAt: FieldRef<"Import_History", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Import_History findUnique
   */
  export type Import_HistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Import_History to fetch.
     */
    where: Import_HistoryWhereUniqueInput
  }

  /**
   * Import_History findUniqueOrThrow
   */
  export type Import_HistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Import_History to fetch.
     */
    where: Import_HistoryWhereUniqueInput
  }

  /**
   * Import_History findFirst
   */
  export type Import_HistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Import_History to fetch.
     */
    where?: Import_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Import_Histories to fetch.
     */
    orderBy?: Import_HistoryOrderByWithRelationInput | Import_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Import_Histories.
     */
    cursor?: Import_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Import_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Import_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Import_Histories.
     */
    distinct?: Import_HistoryScalarFieldEnum | Import_HistoryScalarFieldEnum[]
  }

  /**
   * Import_History findFirstOrThrow
   */
  export type Import_HistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Import_History to fetch.
     */
    where?: Import_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Import_Histories to fetch.
     */
    orderBy?: Import_HistoryOrderByWithRelationInput | Import_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Import_Histories.
     */
    cursor?: Import_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Import_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Import_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Import_Histories.
     */
    distinct?: Import_HistoryScalarFieldEnum | Import_HistoryScalarFieldEnum[]
  }

  /**
   * Import_History findMany
   */
  export type Import_HistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * Filter, which Import_Histories to fetch.
     */
    where?: Import_HistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Import_Histories to fetch.
     */
    orderBy?: Import_HistoryOrderByWithRelationInput | Import_HistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Import_Histories.
     */
    cursor?: Import_HistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Import_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Import_Histories.
     */
    skip?: number
    distinct?: Import_HistoryScalarFieldEnum | Import_HistoryScalarFieldEnum[]
  }

  /**
   * Import_History create
   */
  export type Import_HistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Import_History.
     */
    data: XOR<Import_HistoryCreateInput, Import_HistoryUncheckedCreateInput>
  }

  /**
   * Import_History createMany
   */
  export type Import_HistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Import_Histories.
     */
    data: Import_HistoryCreateManyInput | Import_HistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Import_History createManyAndReturn
   */
  export type Import_HistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * The data used to create many Import_Histories.
     */
    data: Import_HistoryCreateManyInput | Import_HistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Import_History update
   */
  export type Import_HistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Import_History.
     */
    data: XOR<Import_HistoryUpdateInput, Import_HistoryUncheckedUpdateInput>
    /**
     * Choose, which Import_History to update.
     */
    where: Import_HistoryWhereUniqueInput
  }

  /**
   * Import_History updateMany
   */
  export type Import_HistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Import_Histories.
     */
    data: XOR<Import_HistoryUpdateManyMutationInput, Import_HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Import_Histories to update
     */
    where?: Import_HistoryWhereInput
    /**
     * Limit how many Import_Histories to update.
     */
    limit?: number
  }

  /**
   * Import_History updateManyAndReturn
   */
  export type Import_HistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * The data used to update Import_Histories.
     */
    data: XOR<Import_HistoryUpdateManyMutationInput, Import_HistoryUncheckedUpdateManyInput>
    /**
     * Filter which Import_Histories to update
     */
    where?: Import_HistoryWhereInput
    /**
     * Limit how many Import_Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Import_History upsert
   */
  export type Import_HistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Import_History to update in case it exists.
     */
    where: Import_HistoryWhereUniqueInput
    /**
     * In case the Import_History found by the `where` argument doesn't exist, create a new Import_History with this data.
     */
    create: XOR<Import_HistoryCreateInput, Import_HistoryUncheckedCreateInput>
    /**
     * In case the Import_History was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Import_HistoryUpdateInput, Import_HistoryUncheckedUpdateInput>
  }

  /**
   * Import_History delete
   */
  export type Import_HistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
    /**
     * Filter which Import_History to delete.
     */
    where: Import_HistoryWhereUniqueInput
  }

  /**
   * Import_History deleteMany
   */
  export type Import_HistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Import_Histories to delete
     */
    where?: Import_HistoryWhereInput
    /**
     * Limit how many Import_Histories to delete.
     */
    limit?: number
  }

  /**
   * Import_History without action
   */
  export type Import_HistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Import_History
     */
    select?: Import_HistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Import_History
     */
    omit?: Import_HistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Import_HistoryInclude<ExtArgs> | null
  }


  /**
   * Model Customer_Care_Notes
   */

  export type AggregateCustomer_Care_Notes = {
    _count: Customer_Care_NotesCountAggregateOutputType | null
    _min: Customer_Care_NotesMinAggregateOutputType | null
    _max: Customer_Care_NotesMaxAggregateOutputType | null
  }

  export type Customer_Care_NotesMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    createdById: string | null
    content: string | null
    createdAt: Date | null
  }

  export type Customer_Care_NotesMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    createdById: string | null
    content: string | null
    createdAt: Date | null
  }

  export type Customer_Care_NotesCountAggregateOutputType = {
    id: number
    contractId: number
    createdById: number
    content: number
    createdAt: number
    _all: number
  }


  export type Customer_Care_NotesMinAggregateInputType = {
    id?: true
    contractId?: true
    createdById?: true
    content?: true
    createdAt?: true
  }

  export type Customer_Care_NotesMaxAggregateInputType = {
    id?: true
    contractId?: true
    createdById?: true
    content?: true
    createdAt?: true
  }

  export type Customer_Care_NotesCountAggregateInputType = {
    id?: true
    contractId?: true
    createdById?: true
    content?: true
    createdAt?: true
    _all?: true
  }

  export type Customer_Care_NotesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer_Care_Notes to aggregate.
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_Care_Notes to fetch.
     */
    orderBy?: Customer_Care_NotesOrderByWithRelationInput | Customer_Care_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Customer_Care_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_Care_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_Care_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customer_Care_Notes
    **/
    _count?: true | Customer_Care_NotesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Customer_Care_NotesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Customer_Care_NotesMaxAggregateInputType
  }

  export type GetCustomer_Care_NotesAggregateType<T extends Customer_Care_NotesAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer_Care_Notes]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer_Care_Notes[P]>
      : GetScalarType<T[P], AggregateCustomer_Care_Notes[P]>
  }




  export type Customer_Care_NotesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Customer_Care_NotesWhereInput
    orderBy?: Customer_Care_NotesOrderByWithAggregationInput | Customer_Care_NotesOrderByWithAggregationInput[]
    by: Customer_Care_NotesScalarFieldEnum[] | Customer_Care_NotesScalarFieldEnum
    having?: Customer_Care_NotesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Customer_Care_NotesCountAggregateInputType | true
    _min?: Customer_Care_NotesMinAggregateInputType
    _max?: Customer_Care_NotesMaxAggregateInputType
  }

  export type Customer_Care_NotesGroupByOutputType = {
    id: string
    contractId: string
    createdById: string
    content: string
    createdAt: Date
    _count: Customer_Care_NotesCountAggregateOutputType | null
    _min: Customer_Care_NotesMinAggregateOutputType | null
    _max: Customer_Care_NotesMaxAggregateOutputType | null
  }

  type GetCustomer_Care_NotesGroupByPayload<T extends Customer_Care_NotesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Customer_Care_NotesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Customer_Care_NotesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Customer_Care_NotesGroupByOutputType[P]>
            : GetScalarType<T[P], Customer_Care_NotesGroupByOutputType[P]>
        }
      >
    >


  export type Customer_Care_NotesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    createdById?: boolean
    content?: boolean
    createdAt?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_Care_Notes"]>

  export type Customer_Care_NotesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    createdById?: boolean
    content?: boolean
    createdAt?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_Care_Notes"]>

  export type Customer_Care_NotesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    createdById?: boolean
    content?: boolean
    createdAt?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer_Care_Notes"]>

  export type Customer_Care_NotesSelectScalar = {
    id?: boolean
    contractId?: boolean
    createdById?: boolean
    content?: boolean
    createdAt?: boolean
  }

  export type Customer_Care_NotesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "createdById" | "content" | "createdAt", ExtArgs["result"]["customer_Care_Notes"]>
  export type Customer_Care_NotesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Customer_Care_NotesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type Customer_Care_NotesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
    creator?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $Customer_Care_NotesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer_Care_Notes"
    objects: {
      contract: Prisma.$ContractsPayload<ExtArgs>
      creator: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      createdById: string
      content: string
      createdAt: Date
    }, ExtArgs["result"]["customer_Care_Notes"]>
    composites: {}
  }

  type Customer_Care_NotesGetPayload<S extends boolean | null | undefined | Customer_Care_NotesDefaultArgs> = $Result.GetResult<Prisma.$Customer_Care_NotesPayload, S>

  type Customer_Care_NotesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Customer_Care_NotesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Customer_Care_NotesCountAggregateInputType | true
    }

  export interface Customer_Care_NotesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer_Care_Notes'], meta: { name: 'Customer_Care_Notes' } }
    /**
     * Find zero or one Customer_Care_Notes that matches the filter.
     * @param {Customer_Care_NotesFindUniqueArgs} args - Arguments to find a Customer_Care_Notes
     * @example
     * // Get one Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Customer_Care_NotesFindUniqueArgs>(args: SelectSubset<T, Customer_Care_NotesFindUniqueArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer_Care_Notes that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Customer_Care_NotesFindUniqueOrThrowArgs} args - Arguments to find a Customer_Care_Notes
     * @example
     * // Get one Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Customer_Care_NotesFindUniqueOrThrowArgs>(args: SelectSubset<T, Customer_Care_NotesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_Care_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesFindFirstArgs} args - Arguments to find a Customer_Care_Notes
     * @example
     * // Get one Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Customer_Care_NotesFindFirstArgs>(args?: SelectSubset<T, Customer_Care_NotesFindFirstArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer_Care_Notes that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesFindFirstOrThrowArgs} args - Arguments to find a Customer_Care_Notes
     * @example
     * // Get one Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Customer_Care_NotesFindFirstOrThrowArgs>(args?: SelectSubset<T, Customer_Care_NotesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customer_Care_Notes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.findMany()
     * 
     * // Get first 10 Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customer_Care_NotesWithIdOnly = await prisma.customer_Care_Notes.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Customer_Care_NotesFindManyArgs>(args?: SelectSubset<T, Customer_Care_NotesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer_Care_Notes.
     * @param {Customer_Care_NotesCreateArgs} args - Arguments to create a Customer_Care_Notes.
     * @example
     * // Create one Customer_Care_Notes
     * const Customer_Care_Notes = await prisma.customer_Care_Notes.create({
     *   data: {
     *     // ... data to create a Customer_Care_Notes
     *   }
     * })
     * 
     */
    create<T extends Customer_Care_NotesCreateArgs>(args: SelectSubset<T, Customer_Care_NotesCreateArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customer_Care_Notes.
     * @param {Customer_Care_NotesCreateManyArgs} args - Arguments to create many Customer_Care_Notes.
     * @example
     * // Create many Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Customer_Care_NotesCreateManyArgs>(args?: SelectSubset<T, Customer_Care_NotesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customer_Care_Notes and returns the data saved in the database.
     * @param {Customer_Care_NotesCreateManyAndReturnArgs} args - Arguments to create many Customer_Care_Notes.
     * @example
     * // Create many Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customer_Care_Notes and only return the `id`
     * const customer_Care_NotesWithIdOnly = await prisma.customer_Care_Notes.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Customer_Care_NotesCreateManyAndReturnArgs>(args?: SelectSubset<T, Customer_Care_NotesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer_Care_Notes.
     * @param {Customer_Care_NotesDeleteArgs} args - Arguments to delete one Customer_Care_Notes.
     * @example
     * // Delete one Customer_Care_Notes
     * const Customer_Care_Notes = await prisma.customer_Care_Notes.delete({
     *   where: {
     *     // ... filter to delete one Customer_Care_Notes
     *   }
     * })
     * 
     */
    delete<T extends Customer_Care_NotesDeleteArgs>(args: SelectSubset<T, Customer_Care_NotesDeleteArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer_Care_Notes.
     * @param {Customer_Care_NotesUpdateArgs} args - Arguments to update one Customer_Care_Notes.
     * @example
     * // Update one Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Customer_Care_NotesUpdateArgs>(args: SelectSubset<T, Customer_Care_NotesUpdateArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customer_Care_Notes.
     * @param {Customer_Care_NotesDeleteManyArgs} args - Arguments to filter Customer_Care_Notes to delete.
     * @example
     * // Delete a few Customer_Care_Notes
     * const { count } = await prisma.customer_Care_Notes.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Customer_Care_NotesDeleteManyArgs>(args?: SelectSubset<T, Customer_Care_NotesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_Care_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Customer_Care_NotesUpdateManyArgs>(args: SelectSubset<T, Customer_Care_NotesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customer_Care_Notes and returns the data updated in the database.
     * @param {Customer_Care_NotesUpdateManyAndReturnArgs} args - Arguments to update many Customer_Care_Notes.
     * @example
     * // Update many Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customer_Care_Notes and only return the `id`
     * const customer_Care_NotesWithIdOnly = await prisma.customer_Care_Notes.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Customer_Care_NotesUpdateManyAndReturnArgs>(args: SelectSubset<T, Customer_Care_NotesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer_Care_Notes.
     * @param {Customer_Care_NotesUpsertArgs} args - Arguments to update or create a Customer_Care_Notes.
     * @example
     * // Update or create a Customer_Care_Notes
     * const customer_Care_Notes = await prisma.customer_Care_Notes.upsert({
     *   create: {
     *     // ... data to create a Customer_Care_Notes
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer_Care_Notes we want to update
     *   }
     * })
     */
    upsert<T extends Customer_Care_NotesUpsertArgs>(args: SelectSubset<T, Customer_Care_NotesUpsertArgs<ExtArgs>>): Prisma__Customer_Care_NotesClient<$Result.GetResult<Prisma.$Customer_Care_NotesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customer_Care_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesCountArgs} args - Arguments to filter Customer_Care_Notes to count.
     * @example
     * // Count the number of Customer_Care_Notes
     * const count = await prisma.customer_Care_Notes.count({
     *   where: {
     *     // ... the filter for the Customer_Care_Notes we want to count
     *   }
     * })
    **/
    count<T extends Customer_Care_NotesCountArgs>(
      args?: Subset<T, Customer_Care_NotesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Customer_Care_NotesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer_Care_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Customer_Care_NotesAggregateArgs>(args: Subset<T, Customer_Care_NotesAggregateArgs>): Prisma.PrismaPromise<GetCustomer_Care_NotesAggregateType<T>>

    /**
     * Group by Customer_Care_Notes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Customer_Care_NotesGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Customer_Care_NotesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Customer_Care_NotesGroupByArgs['orderBy'] }
        : { orderBy?: Customer_Care_NotesGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Customer_Care_NotesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomer_Care_NotesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer_Care_Notes model
   */
  readonly fields: Customer_Care_NotesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer_Care_Notes.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Customer_Care_NotesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractsDefaultArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    creator<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Customer_Care_Notes model
   */
  interface Customer_Care_NotesFieldRefs {
    readonly id: FieldRef<"Customer_Care_Notes", 'String'>
    readonly contractId: FieldRef<"Customer_Care_Notes", 'String'>
    readonly createdById: FieldRef<"Customer_Care_Notes", 'String'>
    readonly content: FieldRef<"Customer_Care_Notes", 'String'>
    readonly createdAt: FieldRef<"Customer_Care_Notes", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer_Care_Notes findUnique
   */
  export type Customer_Care_NotesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Customer_Care_Notes to fetch.
     */
    where: Customer_Care_NotesWhereUniqueInput
  }

  /**
   * Customer_Care_Notes findUniqueOrThrow
   */
  export type Customer_Care_NotesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Customer_Care_Notes to fetch.
     */
    where: Customer_Care_NotesWhereUniqueInput
  }

  /**
   * Customer_Care_Notes findFirst
   */
  export type Customer_Care_NotesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Customer_Care_Notes to fetch.
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_Care_Notes to fetch.
     */
    orderBy?: Customer_Care_NotesOrderByWithRelationInput | Customer_Care_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_Care_Notes.
     */
    cursor?: Customer_Care_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_Care_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_Care_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_Care_Notes.
     */
    distinct?: Customer_Care_NotesScalarFieldEnum | Customer_Care_NotesScalarFieldEnum[]
  }

  /**
   * Customer_Care_Notes findFirstOrThrow
   */
  export type Customer_Care_NotesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Customer_Care_Notes to fetch.
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_Care_Notes to fetch.
     */
    orderBy?: Customer_Care_NotesOrderByWithRelationInput | Customer_Care_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customer_Care_Notes.
     */
    cursor?: Customer_Care_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_Care_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_Care_Notes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customer_Care_Notes.
     */
    distinct?: Customer_Care_NotesScalarFieldEnum | Customer_Care_NotesScalarFieldEnum[]
  }

  /**
   * Customer_Care_Notes findMany
   */
  export type Customer_Care_NotesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * Filter, which Customer_Care_Notes to fetch.
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customer_Care_Notes to fetch.
     */
    orderBy?: Customer_Care_NotesOrderByWithRelationInput | Customer_Care_NotesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customer_Care_Notes.
     */
    cursor?: Customer_Care_NotesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customer_Care_Notes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customer_Care_Notes.
     */
    skip?: number
    distinct?: Customer_Care_NotesScalarFieldEnum | Customer_Care_NotesScalarFieldEnum[]
  }

  /**
   * Customer_Care_Notes create
   */
  export type Customer_Care_NotesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer_Care_Notes.
     */
    data: XOR<Customer_Care_NotesCreateInput, Customer_Care_NotesUncheckedCreateInput>
  }

  /**
   * Customer_Care_Notes createMany
   */
  export type Customer_Care_NotesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customer_Care_Notes.
     */
    data: Customer_Care_NotesCreateManyInput | Customer_Care_NotesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer_Care_Notes createManyAndReturn
   */
  export type Customer_Care_NotesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * The data used to create many Customer_Care_Notes.
     */
    data: Customer_Care_NotesCreateManyInput | Customer_Care_NotesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer_Care_Notes update
   */
  export type Customer_Care_NotesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer_Care_Notes.
     */
    data: XOR<Customer_Care_NotesUpdateInput, Customer_Care_NotesUncheckedUpdateInput>
    /**
     * Choose, which Customer_Care_Notes to update.
     */
    where: Customer_Care_NotesWhereUniqueInput
  }

  /**
   * Customer_Care_Notes updateMany
   */
  export type Customer_Care_NotesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customer_Care_Notes.
     */
    data: XOR<Customer_Care_NotesUpdateManyMutationInput, Customer_Care_NotesUncheckedUpdateManyInput>
    /**
     * Filter which Customer_Care_Notes to update
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * Limit how many Customer_Care_Notes to update.
     */
    limit?: number
  }

  /**
   * Customer_Care_Notes updateManyAndReturn
   */
  export type Customer_Care_NotesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * The data used to update Customer_Care_Notes.
     */
    data: XOR<Customer_Care_NotesUpdateManyMutationInput, Customer_Care_NotesUncheckedUpdateManyInput>
    /**
     * Filter which Customer_Care_Notes to update
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * Limit how many Customer_Care_Notes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Customer_Care_Notes upsert
   */
  export type Customer_Care_NotesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer_Care_Notes to update in case it exists.
     */
    where: Customer_Care_NotesWhereUniqueInput
    /**
     * In case the Customer_Care_Notes found by the `where` argument doesn't exist, create a new Customer_Care_Notes with this data.
     */
    create: XOR<Customer_Care_NotesCreateInput, Customer_Care_NotesUncheckedCreateInput>
    /**
     * In case the Customer_Care_Notes was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Customer_Care_NotesUpdateInput, Customer_Care_NotesUncheckedUpdateInput>
  }

  /**
   * Customer_Care_Notes delete
   */
  export type Customer_Care_NotesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
    /**
     * Filter which Customer_Care_Notes to delete.
     */
    where: Customer_Care_NotesWhereUniqueInput
  }

  /**
   * Customer_Care_Notes deleteMany
   */
  export type Customer_Care_NotesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer_Care_Notes to delete
     */
    where?: Customer_Care_NotesWhereInput
    /**
     * Limit how many Customer_Care_Notes to delete.
     */
    limit?: number
  }

  /**
   * Customer_Care_Notes without action
   */
  export type Customer_Care_NotesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer_Care_Notes
     */
    select?: Customer_Care_NotesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer_Care_Notes
     */
    omit?: Customer_Care_NotesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Customer_Care_NotesInclude<ExtArgs> | null
  }


  /**
   * Model Contract_Renewals
   */

  export type AggregateContract_Renewals = {
    _count: Contract_RenewalsCountAggregateOutputType | null
    _min: Contract_RenewalsMinAggregateOutputType | null
    _max: Contract_RenewalsMaxAggregateOutputType | null
  }

  export type Contract_RenewalsMinAggregateOutputType = {
    id: string | null
    contractId: string | null
    renewalDate: Date | null
    note: string | null
    processedBy: string | null
    createdAt: Date | null
  }

  export type Contract_RenewalsMaxAggregateOutputType = {
    id: string | null
    contractId: string | null
    renewalDate: Date | null
    note: string | null
    processedBy: string | null
    createdAt: Date | null
  }

  export type Contract_RenewalsCountAggregateOutputType = {
    id: number
    contractId: number
    renewalDate: number
    note: number
    processedBy: number
    createdAt: number
    _all: number
  }


  export type Contract_RenewalsMinAggregateInputType = {
    id?: true
    contractId?: true
    renewalDate?: true
    note?: true
    processedBy?: true
    createdAt?: true
  }

  export type Contract_RenewalsMaxAggregateInputType = {
    id?: true
    contractId?: true
    renewalDate?: true
    note?: true
    processedBy?: true
    createdAt?: true
  }

  export type Contract_RenewalsCountAggregateInputType = {
    id?: true
    contractId?: true
    renewalDate?: true
    note?: true
    processedBy?: true
    createdAt?: true
    _all?: true
  }

  export type Contract_RenewalsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract_Renewals to aggregate.
     */
    where?: Contract_RenewalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_Renewals to fetch.
     */
    orderBy?: Contract_RenewalsOrderByWithRelationInput | Contract_RenewalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Contract_RenewalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_Renewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_Renewals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Contract_Renewals
    **/
    _count?: true | Contract_RenewalsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Contract_RenewalsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Contract_RenewalsMaxAggregateInputType
  }

  export type GetContract_RenewalsAggregateType<T extends Contract_RenewalsAggregateArgs> = {
        [P in keyof T & keyof AggregateContract_Renewals]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateContract_Renewals[P]>
      : GetScalarType<T[P], AggregateContract_Renewals[P]>
  }




  export type Contract_RenewalsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Contract_RenewalsWhereInput
    orderBy?: Contract_RenewalsOrderByWithAggregationInput | Contract_RenewalsOrderByWithAggregationInput[]
    by: Contract_RenewalsScalarFieldEnum[] | Contract_RenewalsScalarFieldEnum
    having?: Contract_RenewalsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Contract_RenewalsCountAggregateInputType | true
    _min?: Contract_RenewalsMinAggregateInputType
    _max?: Contract_RenewalsMaxAggregateInputType
  }

  export type Contract_RenewalsGroupByOutputType = {
    id: string
    contractId: string
    renewalDate: Date
    note: string | null
    processedBy: string | null
    createdAt: Date
    _count: Contract_RenewalsCountAggregateOutputType | null
    _min: Contract_RenewalsMinAggregateOutputType | null
    _max: Contract_RenewalsMaxAggregateOutputType | null
  }

  type GetContract_RenewalsGroupByPayload<T extends Contract_RenewalsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Contract_RenewalsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Contract_RenewalsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Contract_RenewalsGroupByOutputType[P]>
            : GetScalarType<T[P], Contract_RenewalsGroupByOutputType[P]>
        }
      >
    >


  export type Contract_RenewalsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    renewalDate?: boolean
    note?: boolean
    processedBy?: boolean
    createdAt?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract_Renewals"]>

  export type Contract_RenewalsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    renewalDate?: boolean
    note?: boolean
    processedBy?: boolean
    createdAt?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract_Renewals"]>

  export type Contract_RenewalsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    contractId?: boolean
    renewalDate?: boolean
    note?: boolean
    processedBy?: boolean
    createdAt?: boolean
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["contract_Renewals"]>

  export type Contract_RenewalsSelectScalar = {
    id?: boolean
    contractId?: boolean
    renewalDate?: boolean
    note?: boolean
    processedBy?: boolean
    createdAt?: boolean
  }

  export type Contract_RenewalsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "contractId" | "renewalDate" | "note" | "processedBy" | "createdAt", ExtArgs["result"]["contract_Renewals"]>
  export type Contract_RenewalsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }
  export type Contract_RenewalsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }
  export type Contract_RenewalsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    contract?: boolean | ContractsDefaultArgs<ExtArgs>
  }

  export type $Contract_RenewalsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Contract_Renewals"
    objects: {
      contract: Prisma.$ContractsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      contractId: string
      renewalDate: Date
      note: string | null
      processedBy: string | null
      createdAt: Date
    }, ExtArgs["result"]["contract_Renewals"]>
    composites: {}
  }

  type Contract_RenewalsGetPayload<S extends boolean | null | undefined | Contract_RenewalsDefaultArgs> = $Result.GetResult<Prisma.$Contract_RenewalsPayload, S>

  type Contract_RenewalsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Contract_RenewalsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Contract_RenewalsCountAggregateInputType | true
    }

  export interface Contract_RenewalsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Contract_Renewals'], meta: { name: 'Contract_Renewals' } }
    /**
     * Find zero or one Contract_Renewals that matches the filter.
     * @param {Contract_RenewalsFindUniqueArgs} args - Arguments to find a Contract_Renewals
     * @example
     * // Get one Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Contract_RenewalsFindUniqueArgs>(args: SelectSubset<T, Contract_RenewalsFindUniqueArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Contract_Renewals that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Contract_RenewalsFindUniqueOrThrowArgs} args - Arguments to find a Contract_Renewals
     * @example
     * // Get one Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Contract_RenewalsFindUniqueOrThrowArgs>(args: SelectSubset<T, Contract_RenewalsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract_Renewals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsFindFirstArgs} args - Arguments to find a Contract_Renewals
     * @example
     * // Get one Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Contract_RenewalsFindFirstArgs>(args?: SelectSubset<T, Contract_RenewalsFindFirstArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Contract_Renewals that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsFindFirstOrThrowArgs} args - Arguments to find a Contract_Renewals
     * @example
     * // Get one Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Contract_RenewalsFindFirstOrThrowArgs>(args?: SelectSubset<T, Contract_RenewalsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Contract_Renewals that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.findMany()
     * 
     * // Get first 10 Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const contract_RenewalsWithIdOnly = await prisma.contract_Renewals.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Contract_RenewalsFindManyArgs>(args?: SelectSubset<T, Contract_RenewalsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Contract_Renewals.
     * @param {Contract_RenewalsCreateArgs} args - Arguments to create a Contract_Renewals.
     * @example
     * // Create one Contract_Renewals
     * const Contract_Renewals = await prisma.contract_Renewals.create({
     *   data: {
     *     // ... data to create a Contract_Renewals
     *   }
     * })
     * 
     */
    create<T extends Contract_RenewalsCreateArgs>(args: SelectSubset<T, Contract_RenewalsCreateArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Contract_Renewals.
     * @param {Contract_RenewalsCreateManyArgs} args - Arguments to create many Contract_Renewals.
     * @example
     * // Create many Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Contract_RenewalsCreateManyArgs>(args?: SelectSubset<T, Contract_RenewalsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Contract_Renewals and returns the data saved in the database.
     * @param {Contract_RenewalsCreateManyAndReturnArgs} args - Arguments to create many Contract_Renewals.
     * @example
     * // Create many Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Contract_Renewals and only return the `id`
     * const contract_RenewalsWithIdOnly = await prisma.contract_Renewals.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Contract_RenewalsCreateManyAndReturnArgs>(args?: SelectSubset<T, Contract_RenewalsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Contract_Renewals.
     * @param {Contract_RenewalsDeleteArgs} args - Arguments to delete one Contract_Renewals.
     * @example
     * // Delete one Contract_Renewals
     * const Contract_Renewals = await prisma.contract_Renewals.delete({
     *   where: {
     *     // ... filter to delete one Contract_Renewals
     *   }
     * })
     * 
     */
    delete<T extends Contract_RenewalsDeleteArgs>(args: SelectSubset<T, Contract_RenewalsDeleteArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Contract_Renewals.
     * @param {Contract_RenewalsUpdateArgs} args - Arguments to update one Contract_Renewals.
     * @example
     * // Update one Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Contract_RenewalsUpdateArgs>(args: SelectSubset<T, Contract_RenewalsUpdateArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Contract_Renewals.
     * @param {Contract_RenewalsDeleteManyArgs} args - Arguments to filter Contract_Renewals to delete.
     * @example
     * // Delete a few Contract_Renewals
     * const { count } = await prisma.contract_Renewals.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Contract_RenewalsDeleteManyArgs>(args?: SelectSubset<T, Contract_RenewalsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contract_Renewals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Contract_RenewalsUpdateManyArgs>(args: SelectSubset<T, Contract_RenewalsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Contract_Renewals and returns the data updated in the database.
     * @param {Contract_RenewalsUpdateManyAndReturnArgs} args - Arguments to update many Contract_Renewals.
     * @example
     * // Update many Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Contract_Renewals and only return the `id`
     * const contract_RenewalsWithIdOnly = await prisma.contract_Renewals.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Contract_RenewalsUpdateManyAndReturnArgs>(args: SelectSubset<T, Contract_RenewalsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Contract_Renewals.
     * @param {Contract_RenewalsUpsertArgs} args - Arguments to update or create a Contract_Renewals.
     * @example
     * // Update or create a Contract_Renewals
     * const contract_Renewals = await prisma.contract_Renewals.upsert({
     *   create: {
     *     // ... data to create a Contract_Renewals
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Contract_Renewals we want to update
     *   }
     * })
     */
    upsert<T extends Contract_RenewalsUpsertArgs>(args: SelectSubset<T, Contract_RenewalsUpsertArgs<ExtArgs>>): Prisma__Contract_RenewalsClient<$Result.GetResult<Prisma.$Contract_RenewalsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Contract_Renewals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsCountArgs} args - Arguments to filter Contract_Renewals to count.
     * @example
     * // Count the number of Contract_Renewals
     * const count = await prisma.contract_Renewals.count({
     *   where: {
     *     // ... the filter for the Contract_Renewals we want to count
     *   }
     * })
    **/
    count<T extends Contract_RenewalsCountArgs>(
      args?: Subset<T, Contract_RenewalsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Contract_RenewalsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Contract_Renewals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends Contract_RenewalsAggregateArgs>(args: Subset<T, Contract_RenewalsAggregateArgs>): Prisma.PrismaPromise<GetContract_RenewalsAggregateType<T>>

    /**
     * Group by Contract_Renewals.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Contract_RenewalsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends Contract_RenewalsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Contract_RenewalsGroupByArgs['orderBy'] }
        : { orderBy?: Contract_RenewalsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, Contract_RenewalsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContract_RenewalsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Contract_Renewals model
   */
  readonly fields: Contract_RenewalsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Contract_Renewals.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Contract_RenewalsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    contract<T extends ContractsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ContractsDefaultArgs<ExtArgs>>): Prisma__ContractsClient<$Result.GetResult<Prisma.$ContractsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Contract_Renewals model
   */
  interface Contract_RenewalsFieldRefs {
    readonly id: FieldRef<"Contract_Renewals", 'String'>
    readonly contractId: FieldRef<"Contract_Renewals", 'String'>
    readonly renewalDate: FieldRef<"Contract_Renewals", 'DateTime'>
    readonly note: FieldRef<"Contract_Renewals", 'String'>
    readonly processedBy: FieldRef<"Contract_Renewals", 'String'>
    readonly createdAt: FieldRef<"Contract_Renewals", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Contract_Renewals findUnique
   */
  export type Contract_RenewalsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * Filter, which Contract_Renewals to fetch.
     */
    where: Contract_RenewalsWhereUniqueInput
  }

  /**
   * Contract_Renewals findUniqueOrThrow
   */
  export type Contract_RenewalsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * Filter, which Contract_Renewals to fetch.
     */
    where: Contract_RenewalsWhereUniqueInput
  }

  /**
   * Contract_Renewals findFirst
   */
  export type Contract_RenewalsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * Filter, which Contract_Renewals to fetch.
     */
    where?: Contract_RenewalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_Renewals to fetch.
     */
    orderBy?: Contract_RenewalsOrderByWithRelationInput | Contract_RenewalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contract_Renewals.
     */
    cursor?: Contract_RenewalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_Renewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_Renewals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contract_Renewals.
     */
    distinct?: Contract_RenewalsScalarFieldEnum | Contract_RenewalsScalarFieldEnum[]
  }

  /**
   * Contract_Renewals findFirstOrThrow
   */
  export type Contract_RenewalsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * Filter, which Contract_Renewals to fetch.
     */
    where?: Contract_RenewalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_Renewals to fetch.
     */
    orderBy?: Contract_RenewalsOrderByWithRelationInput | Contract_RenewalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Contract_Renewals.
     */
    cursor?: Contract_RenewalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_Renewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_Renewals.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Contract_Renewals.
     */
    distinct?: Contract_RenewalsScalarFieldEnum | Contract_RenewalsScalarFieldEnum[]
  }

  /**
   * Contract_Renewals findMany
   */
  export type Contract_RenewalsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * Filter, which Contract_Renewals to fetch.
     */
    where?: Contract_RenewalsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Contract_Renewals to fetch.
     */
    orderBy?: Contract_RenewalsOrderByWithRelationInput | Contract_RenewalsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Contract_Renewals.
     */
    cursor?: Contract_RenewalsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Contract_Renewals from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Contract_Renewals.
     */
    skip?: number
    distinct?: Contract_RenewalsScalarFieldEnum | Contract_RenewalsScalarFieldEnum[]
  }

  /**
   * Contract_Renewals create
   */
  export type Contract_RenewalsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * The data needed to create a Contract_Renewals.
     */
    data: XOR<Contract_RenewalsCreateInput, Contract_RenewalsUncheckedCreateInput>
  }

  /**
   * Contract_Renewals createMany
   */
  export type Contract_RenewalsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Contract_Renewals.
     */
    data: Contract_RenewalsCreateManyInput | Contract_RenewalsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Contract_Renewals createManyAndReturn
   */
  export type Contract_RenewalsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * The data used to create many Contract_Renewals.
     */
    data: Contract_RenewalsCreateManyInput | Contract_RenewalsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract_Renewals update
   */
  export type Contract_RenewalsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * The data needed to update a Contract_Renewals.
     */
    data: XOR<Contract_RenewalsUpdateInput, Contract_RenewalsUncheckedUpdateInput>
    /**
     * Choose, which Contract_Renewals to update.
     */
    where: Contract_RenewalsWhereUniqueInput
  }

  /**
   * Contract_Renewals updateMany
   */
  export type Contract_RenewalsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Contract_Renewals.
     */
    data: XOR<Contract_RenewalsUpdateManyMutationInput, Contract_RenewalsUncheckedUpdateManyInput>
    /**
     * Filter which Contract_Renewals to update
     */
    where?: Contract_RenewalsWhereInput
    /**
     * Limit how many Contract_Renewals to update.
     */
    limit?: number
  }

  /**
   * Contract_Renewals updateManyAndReturn
   */
  export type Contract_RenewalsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * The data used to update Contract_Renewals.
     */
    data: XOR<Contract_RenewalsUpdateManyMutationInput, Contract_RenewalsUncheckedUpdateManyInput>
    /**
     * Filter which Contract_Renewals to update
     */
    where?: Contract_RenewalsWhereInput
    /**
     * Limit how many Contract_Renewals to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Contract_Renewals upsert
   */
  export type Contract_RenewalsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * The filter to search for the Contract_Renewals to update in case it exists.
     */
    where: Contract_RenewalsWhereUniqueInput
    /**
     * In case the Contract_Renewals found by the `where` argument doesn't exist, create a new Contract_Renewals with this data.
     */
    create: XOR<Contract_RenewalsCreateInput, Contract_RenewalsUncheckedCreateInput>
    /**
     * In case the Contract_Renewals was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Contract_RenewalsUpdateInput, Contract_RenewalsUncheckedUpdateInput>
  }

  /**
   * Contract_Renewals delete
   */
  export type Contract_RenewalsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
    /**
     * Filter which Contract_Renewals to delete.
     */
    where: Contract_RenewalsWhereUniqueInput
  }

  /**
   * Contract_Renewals deleteMany
   */
  export type Contract_RenewalsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Contract_Renewals to delete
     */
    where?: Contract_RenewalsWhereInput
    /**
     * Limit how many Contract_Renewals to delete.
     */
    limit?: number
  }

  /**
   * Contract_Renewals without action
   */
  export type Contract_RenewalsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Contract_Renewals
     */
    select?: Contract_RenewalsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Contract_Renewals
     */
    omit?: Contract_RenewalsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Contract_RenewalsInclude<ExtArgs> | null
  }


  /**
   * Model System_Settings
   */

  export type AggregateSystem_Settings = {
    _count: System_SettingsCountAggregateOutputType | null
    _min: System_SettingsMinAggregateOutputType | null
    _max: System_SettingsMaxAggregateOutputType | null
  }

  export type System_SettingsMinAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
  }

  export type System_SettingsMaxAggregateOutputType = {
    id: string | null
    key: string | null
    value: string | null
    description: string | null
  }

  export type System_SettingsCountAggregateOutputType = {
    id: number
    key: number
    value: number
    description: number
    _all: number
  }


  export type System_SettingsMinAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
  }

  export type System_SettingsMaxAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
  }

  export type System_SettingsCountAggregateInputType = {
    id?: true
    key?: true
    value?: true
    description?: true
    _all?: true
  }

  export type System_SettingsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which System_Settings to aggregate.
     */
    where?: System_SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of System_Settings to fetch.
     */
    orderBy?: System_SettingsOrderByWithRelationInput | System_SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: System_SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` System_Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` System_Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned System_Settings
    **/
    _count?: true | System_SettingsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: System_SettingsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: System_SettingsMaxAggregateInputType
  }

  export type GetSystem_SettingsAggregateType<T extends System_SettingsAggregateArgs> = {
        [P in keyof T & keyof AggregateSystem_Settings]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSystem_Settings[P]>
      : GetScalarType<T[P], AggregateSystem_Settings[P]>
  }




  export type System_SettingsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: System_SettingsWhereInput
    orderBy?: System_SettingsOrderByWithAggregationInput | System_SettingsOrderByWithAggregationInput[]
    by: System_SettingsScalarFieldEnum[] | System_SettingsScalarFieldEnum
    having?: System_SettingsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: System_SettingsCountAggregateInputType | true
    _min?: System_SettingsMinAggregateInputType
    _max?: System_SettingsMaxAggregateInputType
  }

  export type System_SettingsGroupByOutputType = {
    id: string
    key: string
    value: string
    description: string | null
    _count: System_SettingsCountAggregateOutputType | null
    _min: System_SettingsMinAggregateOutputType | null
    _max: System_SettingsMaxAggregateOutputType | null
  }

  type GetSystem_SettingsGroupByPayload<T extends System_SettingsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<System_SettingsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof System_SettingsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], System_SettingsGroupByOutputType[P]>
            : GetScalarType<T[P], System_SettingsGroupByOutputType[P]>
        }
      >
    >


  export type System_SettingsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["system_Settings"]>

  export type System_SettingsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["system_Settings"]>

  export type System_SettingsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }, ExtArgs["result"]["system_Settings"]>

  export type System_SettingsSelectScalar = {
    id?: boolean
    key?: boolean
    value?: boolean
    description?: boolean
  }

  export type System_SettingsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "key" | "value" | "description", ExtArgs["result"]["system_Settings"]>

  export type $System_SettingsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "System_Settings"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      key: string
      value: string
      description: string | null
    }, ExtArgs["result"]["system_Settings"]>
    composites: {}
  }

  type System_SettingsGetPayload<S extends boolean | null | undefined | System_SettingsDefaultArgs> = $Result.GetResult<Prisma.$System_SettingsPayload, S>

  type System_SettingsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<System_SettingsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: System_SettingsCountAggregateInputType | true
    }

  export interface System_SettingsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['System_Settings'], meta: { name: 'System_Settings' } }
    /**
     * Find zero or one System_Settings that matches the filter.
     * @param {System_SettingsFindUniqueArgs} args - Arguments to find a System_Settings
     * @example
     * // Get one System_Settings
     * const system_Settings = await prisma.system_Settings.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends System_SettingsFindUniqueArgs>(args: SelectSubset<T, System_SettingsFindUniqueArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one System_Settings that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {System_SettingsFindUniqueOrThrowArgs} args - Arguments to find a System_Settings
     * @example
     * // Get one System_Settings
     * const system_Settings = await prisma.system_Settings.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends System_SettingsFindUniqueOrThrowArgs>(args: SelectSubset<T, System_SettingsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System_Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsFindFirstArgs} args - Arguments to find a System_Settings
     * @example
     * // Get one System_Settings
     * const system_Settings = await prisma.system_Settings.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends System_SettingsFindFirstArgs>(args?: SelectSubset<T, System_SettingsFindFirstArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first System_Settings that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsFindFirstOrThrowArgs} args - Arguments to find a System_Settings
     * @example
     * // Get one System_Settings
     * const system_Settings = await prisma.system_Settings.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends System_SettingsFindFirstOrThrowArgs>(args?: SelectSubset<T, System_SettingsFindFirstOrThrowArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more System_Settings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all System_Settings
     * const system_Settings = await prisma.system_Settings.findMany()
     * 
     * // Get first 10 System_Settings
     * const system_Settings = await prisma.system_Settings.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const system_SettingsWithIdOnly = await prisma.system_Settings.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends System_SettingsFindManyArgs>(args?: SelectSubset<T, System_SettingsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a System_Settings.
     * @param {System_SettingsCreateArgs} args - Arguments to create a System_Settings.
     * @example
     * // Create one System_Settings
     * const System_Settings = await prisma.system_Settings.create({
     *   data: {
     *     // ... data to create a System_Settings
     *   }
     * })
     * 
     */
    create<T extends System_SettingsCreateArgs>(args: SelectSubset<T, System_SettingsCreateArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many System_Settings.
     * @param {System_SettingsCreateManyArgs} args - Arguments to create many System_Settings.
     * @example
     * // Create many System_Settings
     * const system_Settings = await prisma.system_Settings.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends System_SettingsCreateManyArgs>(args?: SelectSubset<T, System_SettingsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many System_Settings and returns the data saved in the database.
     * @param {System_SettingsCreateManyAndReturnArgs} args - Arguments to create many System_Settings.
     * @example
     * // Create many System_Settings
     * const system_Settings = await prisma.system_Settings.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many System_Settings and only return the `id`
     * const system_SettingsWithIdOnly = await prisma.system_Settings.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends System_SettingsCreateManyAndReturnArgs>(args?: SelectSubset<T, System_SettingsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a System_Settings.
     * @param {System_SettingsDeleteArgs} args - Arguments to delete one System_Settings.
     * @example
     * // Delete one System_Settings
     * const System_Settings = await prisma.system_Settings.delete({
     *   where: {
     *     // ... filter to delete one System_Settings
     *   }
     * })
     * 
     */
    delete<T extends System_SettingsDeleteArgs>(args: SelectSubset<T, System_SettingsDeleteArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one System_Settings.
     * @param {System_SettingsUpdateArgs} args - Arguments to update one System_Settings.
     * @example
     * // Update one System_Settings
     * const system_Settings = await prisma.system_Settings.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends System_SettingsUpdateArgs>(args: SelectSubset<T, System_SettingsUpdateArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more System_Settings.
     * @param {System_SettingsDeleteManyArgs} args - Arguments to filter System_Settings to delete.
     * @example
     * // Delete a few System_Settings
     * const { count } = await prisma.system_Settings.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends System_SettingsDeleteManyArgs>(args?: SelectSubset<T, System_SettingsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many System_Settings
     * const system_Settings = await prisma.system_Settings.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends System_SettingsUpdateManyArgs>(args: SelectSubset<T, System_SettingsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more System_Settings and returns the data updated in the database.
     * @param {System_SettingsUpdateManyAndReturnArgs} args - Arguments to update many System_Settings.
     * @example
     * // Update many System_Settings
     * const system_Settings = await prisma.system_Settings.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more System_Settings and only return the `id`
     * const system_SettingsWithIdOnly = await prisma.system_Settings.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends System_SettingsUpdateManyAndReturnArgs>(args: SelectSubset<T, System_SettingsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one System_Settings.
     * @param {System_SettingsUpsertArgs} args - Arguments to update or create a System_Settings.
     * @example
     * // Update or create a System_Settings
     * const system_Settings = await prisma.system_Settings.upsert({
     *   create: {
     *     // ... data to create a System_Settings
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the System_Settings we want to update
     *   }
     * })
     */
    upsert<T extends System_SettingsUpsertArgs>(args: SelectSubset<T, System_SettingsUpsertArgs<ExtArgs>>): Prisma__System_SettingsClient<$Result.GetResult<Prisma.$System_SettingsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of System_Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsCountArgs} args - Arguments to filter System_Settings to count.
     * @example
     * // Count the number of System_Settings
     * const count = await prisma.system_Settings.count({
     *   where: {
     *     // ... the filter for the System_Settings we want to count
     *   }
     * })
    **/
    count<T extends System_SettingsCountArgs>(
      args?: Subset<T, System_SettingsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], System_SettingsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a System_Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends System_SettingsAggregateArgs>(args: Subset<T, System_SettingsAggregateArgs>): Prisma.PrismaPromise<GetSystem_SettingsAggregateType<T>>

    /**
     * Group by System_Settings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {System_SettingsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends System_SettingsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: System_SettingsGroupByArgs['orderBy'] }
        : { orderBy?: System_SettingsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, System_SettingsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSystem_SettingsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the System_Settings model
   */
  readonly fields: System_SettingsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for System_Settings.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__System_SettingsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the System_Settings model
   */
  interface System_SettingsFieldRefs {
    readonly id: FieldRef<"System_Settings", 'String'>
    readonly key: FieldRef<"System_Settings", 'String'>
    readonly value: FieldRef<"System_Settings", 'String'>
    readonly description: FieldRef<"System_Settings", 'String'>
  }
    

  // Custom InputTypes
  /**
   * System_Settings findUnique
   */
  export type System_SettingsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * Filter, which System_Settings to fetch.
     */
    where: System_SettingsWhereUniqueInput
  }

  /**
   * System_Settings findUniqueOrThrow
   */
  export type System_SettingsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * Filter, which System_Settings to fetch.
     */
    where: System_SettingsWhereUniqueInput
  }

  /**
   * System_Settings findFirst
   */
  export type System_SettingsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * Filter, which System_Settings to fetch.
     */
    where?: System_SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of System_Settings to fetch.
     */
    orderBy?: System_SettingsOrderByWithRelationInput | System_SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for System_Settings.
     */
    cursor?: System_SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` System_Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` System_Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of System_Settings.
     */
    distinct?: System_SettingsScalarFieldEnum | System_SettingsScalarFieldEnum[]
  }

  /**
   * System_Settings findFirstOrThrow
   */
  export type System_SettingsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * Filter, which System_Settings to fetch.
     */
    where?: System_SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of System_Settings to fetch.
     */
    orderBy?: System_SettingsOrderByWithRelationInput | System_SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for System_Settings.
     */
    cursor?: System_SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` System_Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` System_Settings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of System_Settings.
     */
    distinct?: System_SettingsScalarFieldEnum | System_SettingsScalarFieldEnum[]
  }

  /**
   * System_Settings findMany
   */
  export type System_SettingsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * Filter, which System_Settings to fetch.
     */
    where?: System_SettingsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of System_Settings to fetch.
     */
    orderBy?: System_SettingsOrderByWithRelationInput | System_SettingsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing System_Settings.
     */
    cursor?: System_SettingsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` System_Settings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` System_Settings.
     */
    skip?: number
    distinct?: System_SettingsScalarFieldEnum | System_SettingsScalarFieldEnum[]
  }

  /**
   * System_Settings create
   */
  export type System_SettingsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * The data needed to create a System_Settings.
     */
    data: XOR<System_SettingsCreateInput, System_SettingsUncheckedCreateInput>
  }

  /**
   * System_Settings createMany
   */
  export type System_SettingsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many System_Settings.
     */
    data: System_SettingsCreateManyInput | System_SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * System_Settings createManyAndReturn
   */
  export type System_SettingsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * The data used to create many System_Settings.
     */
    data: System_SettingsCreateManyInput | System_SettingsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * System_Settings update
   */
  export type System_SettingsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * The data needed to update a System_Settings.
     */
    data: XOR<System_SettingsUpdateInput, System_SettingsUncheckedUpdateInput>
    /**
     * Choose, which System_Settings to update.
     */
    where: System_SettingsWhereUniqueInput
  }

  /**
   * System_Settings updateMany
   */
  export type System_SettingsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update System_Settings.
     */
    data: XOR<System_SettingsUpdateManyMutationInput, System_SettingsUncheckedUpdateManyInput>
    /**
     * Filter which System_Settings to update
     */
    where?: System_SettingsWhereInput
    /**
     * Limit how many System_Settings to update.
     */
    limit?: number
  }

  /**
   * System_Settings updateManyAndReturn
   */
  export type System_SettingsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * The data used to update System_Settings.
     */
    data: XOR<System_SettingsUpdateManyMutationInput, System_SettingsUncheckedUpdateManyInput>
    /**
     * Filter which System_Settings to update
     */
    where?: System_SettingsWhereInput
    /**
     * Limit how many System_Settings to update.
     */
    limit?: number
  }

  /**
   * System_Settings upsert
   */
  export type System_SettingsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * The filter to search for the System_Settings to update in case it exists.
     */
    where: System_SettingsWhereUniqueInput
    /**
     * In case the System_Settings found by the `where` argument doesn't exist, create a new System_Settings with this data.
     */
    create: XOR<System_SettingsCreateInput, System_SettingsUncheckedCreateInput>
    /**
     * In case the System_Settings was found with the provided `where` argument, update it with this data.
     */
    update: XOR<System_SettingsUpdateInput, System_SettingsUncheckedUpdateInput>
  }

  /**
   * System_Settings delete
   */
  export type System_SettingsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
    /**
     * Filter which System_Settings to delete.
     */
    where: System_SettingsWhereUniqueInput
  }

  /**
   * System_Settings deleteMany
   */
  export type System_SettingsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which System_Settings to delete
     */
    where?: System_SettingsWhereInput
    /**
     * Limit how many System_Settings to delete.
     */
    limit?: number
  }

  /**
   * System_Settings without action
   */
  export type System_SettingsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the System_Settings
     */
    select?: System_SettingsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the System_Settings
     */
    omit?: System_SettingsOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const RoleScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    description: 'description',
    is_active: 'is_active'
  };

  export type RoleScalarFieldEnum = (typeof RoleScalarFieldEnum)[keyof typeof RoleScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    employeeCode: 'employeeCode',
    fullName: 'fullName',
    password: 'password',
    email: 'email',
    gender: 'gender',
    dob: 'dob',
    address: 'address',
    account_type: 'account_type',
    phone: 'phone',
    joinDate: 'joinDate',
    leaveDate: 'leaveDate',
    isActive: 'isActive',
    regionCode: 'regionCode',
    seniorDeptManagerId: 'seniorDeptManagerId',
    deptManagerId: 'deptManagerId',
    managerId: 'managerId',
    roleId: 'roleId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const RegionScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    address: 'address',
    isActive: 'isActive'
  };

  export type RegionScalarFieldEnum = (typeof RegionScalarFieldEnum)[keyof typeof RegionScalarFieldEnum]


  export const Audit_LogsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    action: 'action',
    tableName: 'tableName',
    oldData: 'oldData',
    newValue: 'newValue',
    createdAt: 'createdAt'
  };

  export type Audit_LogsScalarFieldEnum = (typeof Audit_LogsScalarFieldEnum)[keyof typeof Audit_LogsScalarFieldEnum]


  export const FilesScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    filePath: 'filePath',
    fileType: 'fileType',
    category: 'category',
    userId: 'userId',
    contractId: 'contractId',
    createdAt: 'createdAt'
  };

  export type FilesScalarFieldEnum = (typeof FilesScalarFieldEnum)[keyof typeof FilesScalarFieldEnum]


  export const PermissionsScalarFieldEnum: {
    id: 'id',
    code: 'code',
    name: 'name',
    module: 'module'
  };

  export type PermissionsScalarFieldEnum = (typeof PermissionsScalarFieldEnum)[keyof typeof PermissionsScalarFieldEnum]


  export const Roles_PermissionsScalarFieldEnum: {
    roleId: 'roleId',
    permissionId: 'permissionId'
  };

  export type Roles_PermissionsScalarFieldEnum = (typeof Roles_PermissionsScalarFieldEnum)[keyof typeof Roles_PermissionsScalarFieldEnum]


  export const Users_RolesScalarFieldEnum: {
    userId: 'userId',
    roleId: 'roleId'
  };

  export type Users_RolesScalarFieldEnum = (typeof Users_RolesScalarFieldEnum)[keyof typeof Users_RolesScalarFieldEnum]


  export const ContractsScalarFieldEnum: {
    id: 'id',
    contractCode: 'contractCode',
    title: 'title',
    type: 'type',
    status: 'status',
    totalAmount: 'totalAmount',
    createdById: 'createdById',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ContractsScalarFieldEnum = (typeof ContractsScalarFieldEnum)[keyof typeof ContractsScalarFieldEnum]


  export const Import_HistoryScalarFieldEnum: {
    id: 'id',
    fileName: 'fileName',
    uploadById: 'uploadById',
    module: 'module',
    totalRows: 'totalRows',
    successRows: 'successRows',
    failedRows: 'failedRows',
    status: 'status',
    errorLog: 'errorLog',
    createdAt: 'createdAt'
  };

  export type Import_HistoryScalarFieldEnum = (typeof Import_HistoryScalarFieldEnum)[keyof typeof Import_HistoryScalarFieldEnum]


  export const Customer_Care_NotesScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    createdById: 'createdById',
    content: 'content',
    createdAt: 'createdAt'
  };

  export type Customer_Care_NotesScalarFieldEnum = (typeof Customer_Care_NotesScalarFieldEnum)[keyof typeof Customer_Care_NotesScalarFieldEnum]


  export const Contract_RenewalsScalarFieldEnum: {
    id: 'id',
    contractId: 'contractId',
    renewalDate: 'renewalDate',
    note: 'note',
    processedBy: 'processedBy',
    createdAt: 'createdAt'
  };

  export type Contract_RenewalsScalarFieldEnum = (typeof Contract_RenewalsScalarFieldEnum)[keyof typeof Contract_RenewalsScalarFieldEnum]


  export const System_SettingsScalarFieldEnum: {
    id: 'id',
    key: 'key',
    value: 'value',
    description: 'description'
  };

  export type System_SettingsScalarFieldEnum = (typeof System_SettingsScalarFieldEnum)[keyof typeof System_SettingsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type RoleWhereInput = {
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    id?: StringFilter<"Role"> | string
    code?: StringFilter<"Role"> | string
    name?: StringFilter<"Role"> | string
    description?: StringNullableFilter<"Role"> | string | null
    is_active?: BoolFilter<"Role"> | boolean
    users?: UserListRelationFilter
    rolesPermissions?: Roles_PermissionsListRelationFilter
    usersRoles?: Users_RolesListRelationFilter
  }

  export type RoleOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    users?: UserOrderByRelationAggregateInput
    rolesPermissions?: Roles_PermissionsOrderByRelationAggregateInput
    usersRoles?: Users_RolesOrderByRelationAggregateInput
  }

  export type RoleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    name?: string
    AND?: RoleWhereInput | RoleWhereInput[]
    OR?: RoleWhereInput[]
    NOT?: RoleWhereInput | RoleWhereInput[]
    description?: StringNullableFilter<"Role"> | string | null
    is_active?: BoolFilter<"Role"> | boolean
    users?: UserListRelationFilter
    rolesPermissions?: Roles_PermissionsListRelationFilter
    usersRoles?: Users_RolesListRelationFilter
  }, "id" | "code" | "name">

  export type RoleOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    is_active?: SortOrder
    _count?: RoleCountOrderByAggregateInput
    _max?: RoleMaxOrderByAggregateInput
    _min?: RoleMinOrderByAggregateInput
  }

  export type RoleScalarWhereWithAggregatesInput = {
    AND?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    OR?: RoleScalarWhereWithAggregatesInput[]
    NOT?: RoleScalarWhereWithAggregatesInput | RoleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Role"> | string
    code?: StringWithAggregatesFilter<"Role"> | string
    name?: StringWithAggregatesFilter<"Role"> | string
    description?: StringNullableWithAggregatesFilter<"Role"> | string | null
    is_active?: BoolWithAggregatesFilter<"Role"> | boolean
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    employeeCode?: StringNullableFilter<"User"> | string | null
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    address?: StringNullableFilter<"User"> | string | null
    account_type?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    joinDate?: DateTimeNullableFilter<"User"> | Date | string | null
    leaveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    regionCode?: StringNullableFilter<"User"> | string | null
    seniorDeptManagerId?: StringNullableFilter<"User"> | string | null
    deptManagerId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    seniorDeptManager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    seniorDeptSubs?: UserListRelationFilter
    deptManager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deptSubs?: UserListRelationFilter
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    directSubs?: UserListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    contracts?: ContractsListRelationFilter
    auditLogs?: Audit_LogsListRelationFilter
    files?: FilesListRelationFilter
    usersRoles?: Users_RolesListRelationFilter
    importHistories?: Import_HistoryListRelationFilter
    cskhNotes?: Customer_Care_NotesListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    employeeCode?: SortOrderInput | SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    account_type?: SortOrder
    phone?: SortOrderInput | SortOrder
    joinDate?: SortOrderInput | SortOrder
    leaveDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    regionCode?: SortOrderInput | SortOrder
    seniorDeptManagerId?: SortOrderInput | SortOrder
    deptManagerId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    region?: RegionOrderByWithRelationInput
    seniorDeptManager?: UserOrderByWithRelationInput
    seniorDeptSubs?: UserOrderByRelationAggregateInput
    deptManager?: UserOrderByWithRelationInput
    deptSubs?: UserOrderByRelationAggregateInput
    manager?: UserOrderByWithRelationInput
    directSubs?: UserOrderByRelationAggregateInput
    role?: RoleOrderByWithRelationInput
    contracts?: ContractsOrderByRelationAggregateInput
    auditLogs?: Audit_LogsOrderByRelationAggregateInput
    files?: FilesOrderByRelationAggregateInput
    usersRoles?: Users_RolesOrderByRelationAggregateInput
    importHistories?: Import_HistoryOrderByRelationAggregateInput
    cskhNotes?: Customer_Care_NotesOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    employeeCode?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    address?: StringNullableFilter<"User"> | string | null
    account_type?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    joinDate?: DateTimeNullableFilter<"User"> | Date | string | null
    leaveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    regionCode?: StringNullableFilter<"User"> | string | null
    seniorDeptManagerId?: StringNullableFilter<"User"> | string | null
    deptManagerId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    region?: XOR<RegionNullableScalarRelationFilter, RegionWhereInput> | null
    seniorDeptManager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    seniorDeptSubs?: UserListRelationFilter
    deptManager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deptSubs?: UserListRelationFilter
    manager?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    directSubs?: UserListRelationFilter
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    contracts?: ContractsListRelationFilter
    auditLogs?: Audit_LogsListRelationFilter
    files?: FilesListRelationFilter
    usersRoles?: Users_RolesListRelationFilter
    importHistories?: Import_HistoryListRelationFilter
    cskhNotes?: Customer_Care_NotesListRelationFilter
  }, "id" | "employeeCode">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    employeeCode?: SortOrderInput | SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrderInput | SortOrder
    gender?: SortOrderInput | SortOrder
    dob?: SortOrderInput | SortOrder
    address?: SortOrderInput | SortOrder
    account_type?: SortOrder
    phone?: SortOrderInput | SortOrder
    joinDate?: SortOrderInput | SortOrder
    leaveDate?: SortOrderInput | SortOrder
    isActive?: SortOrder
    regionCode?: SortOrderInput | SortOrder
    seniorDeptManagerId?: SortOrderInput | SortOrder
    deptManagerId?: SortOrderInput | SortOrder
    managerId?: SortOrderInput | SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    employeeCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    fullName?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    dob?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    account_type?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    joinDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    leaveDate?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    isActive?: BoolWithAggregatesFilter<"User"> | boolean
    regionCode?: StringNullableWithAggregatesFilter<"User"> | string | null
    seniorDeptManagerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    deptManagerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    managerId?: StringNullableWithAggregatesFilter<"User"> | string | null
    roleId?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type RegionWhereInput = {
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    id?: StringFilter<"Region"> | string
    code?: StringFilter<"Region"> | string
    name?: StringFilter<"Region"> | string
    address?: StringNullableFilter<"Region"> | string | null
    isActive?: BoolFilter<"Region"> | boolean
    users?: UserListRelationFilter
  }

  export type RegionOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    users?: UserOrderByRelationAggregateInput
  }

  export type RegionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: RegionWhereInput | RegionWhereInput[]
    OR?: RegionWhereInput[]
    NOT?: RegionWhereInput | RegionWhereInput[]
    name?: StringFilter<"Region"> | string
    address?: StringNullableFilter<"Region"> | string | null
    isActive?: BoolFilter<"Region"> | boolean
    users?: UserListRelationFilter
  }, "id" | "code">

  export type RegionOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrderInput | SortOrder
    isActive?: SortOrder
    _count?: RegionCountOrderByAggregateInput
    _max?: RegionMaxOrderByAggregateInput
    _min?: RegionMinOrderByAggregateInput
  }

  export type RegionScalarWhereWithAggregatesInput = {
    AND?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    OR?: RegionScalarWhereWithAggregatesInput[]
    NOT?: RegionScalarWhereWithAggregatesInput | RegionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Region"> | string
    code?: StringWithAggregatesFilter<"Region"> | string
    name?: StringWithAggregatesFilter<"Region"> | string
    address?: StringNullableWithAggregatesFilter<"Region"> | string | null
    isActive?: BoolWithAggregatesFilter<"Region"> | boolean
  }

  export type Audit_LogsWhereInput = {
    AND?: Audit_LogsWhereInput | Audit_LogsWhereInput[]
    OR?: Audit_LogsWhereInput[]
    NOT?: Audit_LogsWhereInput | Audit_LogsWhereInput[]
    id?: StringFilter<"Audit_Logs"> | string
    userId?: StringFilter<"Audit_Logs"> | string
    action?: StringFilter<"Audit_Logs"> | string
    tableName?: StringFilter<"Audit_Logs"> | string
    oldData?: JsonNullableFilter<"Audit_Logs">
    newValue?: JsonNullableFilter<"Audit_Logs">
    createdAt?: DateTimeFilter<"Audit_Logs"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Audit_LogsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    oldData?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type Audit_LogsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Audit_LogsWhereInput | Audit_LogsWhereInput[]
    OR?: Audit_LogsWhereInput[]
    NOT?: Audit_LogsWhereInput | Audit_LogsWhereInput[]
    userId?: StringFilter<"Audit_Logs"> | string
    action?: StringFilter<"Audit_Logs"> | string
    tableName?: StringFilter<"Audit_Logs"> | string
    oldData?: JsonNullableFilter<"Audit_Logs">
    newValue?: JsonNullableFilter<"Audit_Logs">
    createdAt?: DateTimeFilter<"Audit_Logs"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Audit_LogsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    oldData?: SortOrderInput | SortOrder
    newValue?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: Audit_LogsCountOrderByAggregateInput
    _max?: Audit_LogsMaxOrderByAggregateInput
    _min?: Audit_LogsMinOrderByAggregateInput
  }

  export type Audit_LogsScalarWhereWithAggregatesInput = {
    AND?: Audit_LogsScalarWhereWithAggregatesInput | Audit_LogsScalarWhereWithAggregatesInput[]
    OR?: Audit_LogsScalarWhereWithAggregatesInput[]
    NOT?: Audit_LogsScalarWhereWithAggregatesInput | Audit_LogsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Audit_Logs"> | string
    userId?: StringWithAggregatesFilter<"Audit_Logs"> | string
    action?: StringWithAggregatesFilter<"Audit_Logs"> | string
    tableName?: StringWithAggregatesFilter<"Audit_Logs"> | string
    oldData?: JsonNullableWithAggregatesFilter<"Audit_Logs">
    newValue?: JsonNullableWithAggregatesFilter<"Audit_Logs">
    createdAt?: DateTimeWithAggregatesFilter<"Audit_Logs"> | Date | string
  }

  export type FilesWhereInput = {
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    id?: StringFilter<"Files"> | string
    fileName?: StringFilter<"Files"> | string
    filePath?: StringFilter<"Files"> | string
    fileType?: StringFilter<"Files"> | string
    category?: StringFilter<"Files"> | string
    userId?: StringNullableFilter<"Files"> | string | null
    contractId?: StringNullableFilter<"Files"> | string | null
    createdAt?: DateTimeFilter<"Files"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    contract?: XOR<ContractsNullableScalarRelationFilter, ContractsWhereInput> | null
  }

  export type FilesOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileType?: SortOrder
    category?: SortOrder
    userId?: SortOrderInput | SortOrder
    contractId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    contract?: ContractsOrderByWithRelationInput
  }

  export type FilesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: FilesWhereInput | FilesWhereInput[]
    OR?: FilesWhereInput[]
    NOT?: FilesWhereInput | FilesWhereInput[]
    fileName?: StringFilter<"Files"> | string
    filePath?: StringFilter<"Files"> | string
    fileType?: StringFilter<"Files"> | string
    category?: StringFilter<"Files"> | string
    userId?: StringNullableFilter<"Files"> | string | null
    contractId?: StringNullableFilter<"Files"> | string | null
    createdAt?: DateTimeFilter<"Files"> | Date | string
    user?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    contract?: XOR<ContractsNullableScalarRelationFilter, ContractsWhereInput> | null
  }, "id">

  export type FilesOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileType?: SortOrder
    category?: SortOrder
    userId?: SortOrderInput | SortOrder
    contractId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: FilesCountOrderByAggregateInput
    _max?: FilesMaxOrderByAggregateInput
    _min?: FilesMinOrderByAggregateInput
  }

  export type FilesScalarWhereWithAggregatesInput = {
    AND?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    OR?: FilesScalarWhereWithAggregatesInput[]
    NOT?: FilesScalarWhereWithAggregatesInput | FilesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Files"> | string
    fileName?: StringWithAggregatesFilter<"Files"> | string
    filePath?: StringWithAggregatesFilter<"Files"> | string
    fileType?: StringWithAggregatesFilter<"Files"> | string
    category?: StringWithAggregatesFilter<"Files"> | string
    userId?: StringNullableWithAggregatesFilter<"Files"> | string | null
    contractId?: StringNullableWithAggregatesFilter<"Files"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Files"> | Date | string
  }

  export type PermissionsWhereInput = {
    AND?: PermissionsWhereInput | PermissionsWhereInput[]
    OR?: PermissionsWhereInput[]
    NOT?: PermissionsWhereInput | PermissionsWhereInput[]
    id?: StringFilter<"Permissions"> | string
    code?: StringFilter<"Permissions"> | string
    name?: StringFilter<"Permissions"> | string
    module?: StringNullableFilter<"Permissions"> | string | null
    rolesPermissions?: Roles_PermissionsListRelationFilter
  }

  export type PermissionsOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    module?: SortOrderInput | SortOrder
    rolesPermissions?: Roles_PermissionsOrderByRelationAggregateInput
  }

  export type PermissionsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: PermissionsWhereInput | PermissionsWhereInput[]
    OR?: PermissionsWhereInput[]
    NOT?: PermissionsWhereInput | PermissionsWhereInput[]
    name?: StringFilter<"Permissions"> | string
    module?: StringNullableFilter<"Permissions"> | string | null
    rolesPermissions?: Roles_PermissionsListRelationFilter
  }, "id" | "code">

  export type PermissionsOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    module?: SortOrderInput | SortOrder
    _count?: PermissionsCountOrderByAggregateInput
    _max?: PermissionsMaxOrderByAggregateInput
    _min?: PermissionsMinOrderByAggregateInput
  }

  export type PermissionsScalarWhereWithAggregatesInput = {
    AND?: PermissionsScalarWhereWithAggregatesInput | PermissionsScalarWhereWithAggregatesInput[]
    OR?: PermissionsScalarWhereWithAggregatesInput[]
    NOT?: PermissionsScalarWhereWithAggregatesInput | PermissionsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Permissions"> | string
    code?: StringWithAggregatesFilter<"Permissions"> | string
    name?: StringWithAggregatesFilter<"Permissions"> | string
    module?: StringNullableWithAggregatesFilter<"Permissions"> | string | null
  }

  export type Roles_PermissionsWhereInput = {
    AND?: Roles_PermissionsWhereInput | Roles_PermissionsWhereInput[]
    OR?: Roles_PermissionsWhereInput[]
    NOT?: Roles_PermissionsWhereInput | Roles_PermissionsWhereInput[]
    roleId?: StringFilter<"Roles_Permissions"> | string
    permissionId?: StringFilter<"Roles_Permissions"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionsScalarRelationFilter, PermissionsWhereInput>
  }

  export type Roles_PermissionsOrderByWithRelationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    role?: RoleOrderByWithRelationInput
    permission?: PermissionsOrderByWithRelationInput
  }

  export type Roles_PermissionsWhereUniqueInput = Prisma.AtLeast<{
    roleId_permissionId?: Roles_PermissionsRoleIdPermissionIdCompoundUniqueInput
    AND?: Roles_PermissionsWhereInput | Roles_PermissionsWhereInput[]
    OR?: Roles_PermissionsWhereInput[]
    NOT?: Roles_PermissionsWhereInput | Roles_PermissionsWhereInput[]
    roleId?: StringFilter<"Roles_Permissions"> | string
    permissionId?: StringFilter<"Roles_Permissions"> | string
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
    permission?: XOR<PermissionsScalarRelationFilter, PermissionsWhereInput>
  }, "roleId_permissionId">

  export type Roles_PermissionsOrderByWithAggregationInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
    _count?: Roles_PermissionsCountOrderByAggregateInput
    _max?: Roles_PermissionsMaxOrderByAggregateInput
    _min?: Roles_PermissionsMinOrderByAggregateInput
  }

  export type Roles_PermissionsScalarWhereWithAggregatesInput = {
    AND?: Roles_PermissionsScalarWhereWithAggregatesInput | Roles_PermissionsScalarWhereWithAggregatesInput[]
    OR?: Roles_PermissionsScalarWhereWithAggregatesInput[]
    NOT?: Roles_PermissionsScalarWhereWithAggregatesInput | Roles_PermissionsScalarWhereWithAggregatesInput[]
    roleId?: StringWithAggregatesFilter<"Roles_Permissions"> | string
    permissionId?: StringWithAggregatesFilter<"Roles_Permissions"> | string
  }

  export type Users_RolesWhereInput = {
    AND?: Users_RolesWhereInput | Users_RolesWhereInput[]
    OR?: Users_RolesWhereInput[]
    NOT?: Users_RolesWhereInput | Users_RolesWhereInput[]
    userId?: StringFilter<"Users_Roles"> | string
    roleId?: StringFilter<"Users_Roles"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }

  export type Users_RolesOrderByWithRelationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    user?: UserOrderByWithRelationInput
    role?: RoleOrderByWithRelationInput
  }

  export type Users_RolesWhereUniqueInput = Prisma.AtLeast<{
    userId_roleId?: Users_RolesUserIdRoleIdCompoundUniqueInput
    AND?: Users_RolesWhereInput | Users_RolesWhereInput[]
    OR?: Users_RolesWhereInput[]
    NOT?: Users_RolesWhereInput | Users_RolesWhereInput[]
    userId?: StringFilter<"Users_Roles"> | string
    roleId?: StringFilter<"Users_Roles"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    role?: XOR<RoleScalarRelationFilter, RoleWhereInput>
  }, "userId_roleId">

  export type Users_RolesOrderByWithAggregationInput = {
    userId?: SortOrder
    roleId?: SortOrder
    _count?: Users_RolesCountOrderByAggregateInput
    _max?: Users_RolesMaxOrderByAggregateInput
    _min?: Users_RolesMinOrderByAggregateInput
  }

  export type Users_RolesScalarWhereWithAggregatesInput = {
    AND?: Users_RolesScalarWhereWithAggregatesInput | Users_RolesScalarWhereWithAggregatesInput[]
    OR?: Users_RolesScalarWhereWithAggregatesInput[]
    NOT?: Users_RolesScalarWhereWithAggregatesInput | Users_RolesScalarWhereWithAggregatesInput[]
    userId?: StringWithAggregatesFilter<"Users_Roles"> | string
    roleId?: StringWithAggregatesFilter<"Users_Roles"> | string
  }

  export type ContractsWhereInput = {
    AND?: ContractsWhereInput | ContractsWhereInput[]
    OR?: ContractsWhereInput[]
    NOT?: ContractsWhereInput | ContractsWhereInput[]
    id?: StringFilter<"Contracts"> | string
    contractCode?: StringFilter<"Contracts"> | string
    title?: StringFilter<"Contracts"> | string
    type?: StringFilter<"Contracts"> | string
    status?: StringFilter<"Contracts"> | string
    totalAmount?: DecimalNullableFilter<"Contracts"> | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFilter<"Contracts"> | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeFilter<"Contracts"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    renewals?: Contract_RenewalsListRelationFilter
    cskhNotes?: Customer_Care_NotesListRelationFilter
    files?: FilesListRelationFilter
  }

  export type ContractsOrderByWithRelationInput = {
    id?: SortOrder
    contractCode?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    creator?: UserOrderByWithRelationInput
    renewals?: Contract_RenewalsOrderByRelationAggregateInput
    cskhNotes?: Customer_Care_NotesOrderByRelationAggregateInput
    files?: FilesOrderByRelationAggregateInput
  }

  export type ContractsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    contractCode?: string
    AND?: ContractsWhereInput | ContractsWhereInput[]
    OR?: ContractsWhereInput[]
    NOT?: ContractsWhereInput | ContractsWhereInput[]
    title?: StringFilter<"Contracts"> | string
    type?: StringFilter<"Contracts"> | string
    status?: StringFilter<"Contracts"> | string
    totalAmount?: DecimalNullableFilter<"Contracts"> | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFilter<"Contracts"> | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeFilter<"Contracts"> | Date | string
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
    renewals?: Contract_RenewalsListRelationFilter
    cskhNotes?: Customer_Care_NotesListRelationFilter
    files?: FilesListRelationFilter
  }, "id" | "contractCode">

  export type ContractsOrderByWithAggregationInput = {
    id?: SortOrder
    contractCode?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrderInput | SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ContractsCountOrderByAggregateInput
    _avg?: ContractsAvgOrderByAggregateInput
    _max?: ContractsMaxOrderByAggregateInput
    _min?: ContractsMinOrderByAggregateInput
    _sum?: ContractsSumOrderByAggregateInput
  }

  export type ContractsScalarWhereWithAggregatesInput = {
    AND?: ContractsScalarWhereWithAggregatesInput | ContractsScalarWhereWithAggregatesInput[]
    OR?: ContractsScalarWhereWithAggregatesInput[]
    NOT?: ContractsScalarWhereWithAggregatesInput | ContractsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contracts"> | string
    contractCode?: StringWithAggregatesFilter<"Contracts"> | string
    title?: StringWithAggregatesFilter<"Contracts"> | string
    type?: StringWithAggregatesFilter<"Contracts"> | string
    status?: StringWithAggregatesFilter<"Contracts"> | string
    totalAmount?: DecimalNullableWithAggregatesFilter<"Contracts"> | Decimal | DecimalJsLike | number | string | null
    createdById?: StringWithAggregatesFilter<"Contracts"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Contracts"> | Date | string
  }

  export type Import_HistoryWhereInput = {
    AND?: Import_HistoryWhereInput | Import_HistoryWhereInput[]
    OR?: Import_HistoryWhereInput[]
    NOT?: Import_HistoryWhereInput | Import_HistoryWhereInput[]
    id?: StringFilter<"Import_History"> | string
    fileName?: StringFilter<"Import_History"> | string
    uploadById?: StringFilter<"Import_History"> | string
    module?: StringFilter<"Import_History"> | string
    totalRows?: IntFilter<"Import_History"> | number
    successRows?: IntFilter<"Import_History"> | number
    failedRows?: IntFilter<"Import_History"> | number
    status?: StringFilter<"Import_History"> | string
    errorLog?: JsonNullableFilter<"Import_History">
    createdAt?: DateTimeFilter<"Import_History"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Import_HistoryOrderByWithRelationInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadById?: SortOrder
    module?: SortOrder
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
    status?: SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    uploader?: UserOrderByWithRelationInput
  }

  export type Import_HistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Import_HistoryWhereInput | Import_HistoryWhereInput[]
    OR?: Import_HistoryWhereInput[]
    NOT?: Import_HistoryWhereInput | Import_HistoryWhereInput[]
    fileName?: StringFilter<"Import_History"> | string
    uploadById?: StringFilter<"Import_History"> | string
    module?: StringFilter<"Import_History"> | string
    totalRows?: IntFilter<"Import_History"> | number
    successRows?: IntFilter<"Import_History"> | number
    failedRows?: IntFilter<"Import_History"> | number
    status?: StringFilter<"Import_History"> | string
    errorLog?: JsonNullableFilter<"Import_History">
    createdAt?: DateTimeFilter<"Import_History"> | Date | string
    uploader?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Import_HistoryOrderByWithAggregationInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadById?: SortOrder
    module?: SortOrder
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
    status?: SortOrder
    errorLog?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: Import_HistoryCountOrderByAggregateInput
    _avg?: Import_HistoryAvgOrderByAggregateInput
    _max?: Import_HistoryMaxOrderByAggregateInput
    _min?: Import_HistoryMinOrderByAggregateInput
    _sum?: Import_HistorySumOrderByAggregateInput
  }

  export type Import_HistoryScalarWhereWithAggregatesInput = {
    AND?: Import_HistoryScalarWhereWithAggregatesInput | Import_HistoryScalarWhereWithAggregatesInput[]
    OR?: Import_HistoryScalarWhereWithAggregatesInput[]
    NOT?: Import_HistoryScalarWhereWithAggregatesInput | Import_HistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Import_History"> | string
    fileName?: StringWithAggregatesFilter<"Import_History"> | string
    uploadById?: StringWithAggregatesFilter<"Import_History"> | string
    module?: StringWithAggregatesFilter<"Import_History"> | string
    totalRows?: IntWithAggregatesFilter<"Import_History"> | number
    successRows?: IntWithAggregatesFilter<"Import_History"> | number
    failedRows?: IntWithAggregatesFilter<"Import_History"> | number
    status?: StringWithAggregatesFilter<"Import_History"> | string
    errorLog?: JsonNullableWithAggregatesFilter<"Import_History">
    createdAt?: DateTimeWithAggregatesFilter<"Import_History"> | Date | string
  }

  export type Customer_Care_NotesWhereInput = {
    AND?: Customer_Care_NotesWhereInput | Customer_Care_NotesWhereInput[]
    OR?: Customer_Care_NotesWhereInput[]
    NOT?: Customer_Care_NotesWhereInput | Customer_Care_NotesWhereInput[]
    id?: StringFilter<"Customer_Care_Notes"> | string
    contractId?: StringFilter<"Customer_Care_Notes"> | string
    createdById?: StringFilter<"Customer_Care_Notes"> | string
    content?: StringFilter<"Customer_Care_Notes"> | string
    createdAt?: DateTimeFilter<"Customer_Care_Notes"> | Date | string
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type Customer_Care_NotesOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    createdById?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    contract?: ContractsOrderByWithRelationInput
    creator?: UserOrderByWithRelationInput
  }

  export type Customer_Care_NotesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Customer_Care_NotesWhereInput | Customer_Care_NotesWhereInput[]
    OR?: Customer_Care_NotesWhereInput[]
    NOT?: Customer_Care_NotesWhereInput | Customer_Care_NotesWhereInput[]
    contractId?: StringFilter<"Customer_Care_Notes"> | string
    createdById?: StringFilter<"Customer_Care_Notes"> | string
    content?: StringFilter<"Customer_Care_Notes"> | string
    createdAt?: DateTimeFilter<"Customer_Care_Notes"> | Date | string
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
    creator?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type Customer_Care_NotesOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    createdById?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    _count?: Customer_Care_NotesCountOrderByAggregateInput
    _max?: Customer_Care_NotesMaxOrderByAggregateInput
    _min?: Customer_Care_NotesMinOrderByAggregateInput
  }

  export type Customer_Care_NotesScalarWhereWithAggregatesInput = {
    AND?: Customer_Care_NotesScalarWhereWithAggregatesInput | Customer_Care_NotesScalarWhereWithAggregatesInput[]
    OR?: Customer_Care_NotesScalarWhereWithAggregatesInput[]
    NOT?: Customer_Care_NotesScalarWhereWithAggregatesInput | Customer_Care_NotesScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer_Care_Notes"> | string
    contractId?: StringWithAggregatesFilter<"Customer_Care_Notes"> | string
    createdById?: StringWithAggregatesFilter<"Customer_Care_Notes"> | string
    content?: StringWithAggregatesFilter<"Customer_Care_Notes"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Customer_Care_Notes"> | Date | string
  }

  export type Contract_RenewalsWhereInput = {
    AND?: Contract_RenewalsWhereInput | Contract_RenewalsWhereInput[]
    OR?: Contract_RenewalsWhereInput[]
    NOT?: Contract_RenewalsWhereInput | Contract_RenewalsWhereInput[]
    id?: StringFilter<"Contract_Renewals"> | string
    contractId?: StringFilter<"Contract_Renewals"> | string
    renewalDate?: DateTimeFilter<"Contract_Renewals"> | Date | string
    note?: StringNullableFilter<"Contract_Renewals"> | string | null
    processedBy?: StringNullableFilter<"Contract_Renewals"> | string | null
    createdAt?: DateTimeFilter<"Contract_Renewals"> | Date | string
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
  }

  export type Contract_RenewalsOrderByWithRelationInput = {
    id?: SortOrder
    contractId?: SortOrder
    renewalDate?: SortOrder
    note?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    contract?: ContractsOrderByWithRelationInput
  }

  export type Contract_RenewalsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Contract_RenewalsWhereInput | Contract_RenewalsWhereInput[]
    OR?: Contract_RenewalsWhereInput[]
    NOT?: Contract_RenewalsWhereInput | Contract_RenewalsWhereInput[]
    contractId?: StringFilter<"Contract_Renewals"> | string
    renewalDate?: DateTimeFilter<"Contract_Renewals"> | Date | string
    note?: StringNullableFilter<"Contract_Renewals"> | string | null
    processedBy?: StringNullableFilter<"Contract_Renewals"> | string | null
    createdAt?: DateTimeFilter<"Contract_Renewals"> | Date | string
    contract?: XOR<ContractsScalarRelationFilter, ContractsWhereInput>
  }, "id">

  export type Contract_RenewalsOrderByWithAggregationInput = {
    id?: SortOrder
    contractId?: SortOrder
    renewalDate?: SortOrder
    note?: SortOrderInput | SortOrder
    processedBy?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: Contract_RenewalsCountOrderByAggregateInput
    _max?: Contract_RenewalsMaxOrderByAggregateInput
    _min?: Contract_RenewalsMinOrderByAggregateInput
  }

  export type Contract_RenewalsScalarWhereWithAggregatesInput = {
    AND?: Contract_RenewalsScalarWhereWithAggregatesInput | Contract_RenewalsScalarWhereWithAggregatesInput[]
    OR?: Contract_RenewalsScalarWhereWithAggregatesInput[]
    NOT?: Contract_RenewalsScalarWhereWithAggregatesInput | Contract_RenewalsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Contract_Renewals"> | string
    contractId?: StringWithAggregatesFilter<"Contract_Renewals"> | string
    renewalDate?: DateTimeWithAggregatesFilter<"Contract_Renewals"> | Date | string
    note?: StringNullableWithAggregatesFilter<"Contract_Renewals"> | string | null
    processedBy?: StringNullableWithAggregatesFilter<"Contract_Renewals"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Contract_Renewals"> | Date | string
  }

  export type System_SettingsWhereInput = {
    AND?: System_SettingsWhereInput | System_SettingsWhereInput[]
    OR?: System_SettingsWhereInput[]
    NOT?: System_SettingsWhereInput | System_SettingsWhereInput[]
    id?: StringFilter<"System_Settings"> | string
    key?: StringFilter<"System_Settings"> | string
    value?: StringFilter<"System_Settings"> | string
    description?: StringNullableFilter<"System_Settings"> | string | null
  }

  export type System_SettingsOrderByWithRelationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
  }

  export type System_SettingsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    key?: string
    AND?: System_SettingsWhereInput | System_SettingsWhereInput[]
    OR?: System_SettingsWhereInput[]
    NOT?: System_SettingsWhereInput | System_SettingsWhereInput[]
    value?: StringFilter<"System_Settings"> | string
    description?: StringNullableFilter<"System_Settings"> | string | null
  }, "id" | "key">

  export type System_SettingsOrderByWithAggregationInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrderInput | SortOrder
    _count?: System_SettingsCountOrderByAggregateInput
    _max?: System_SettingsMaxOrderByAggregateInput
    _min?: System_SettingsMinOrderByAggregateInput
  }

  export type System_SettingsScalarWhereWithAggregatesInput = {
    AND?: System_SettingsScalarWhereWithAggregatesInput | System_SettingsScalarWhereWithAggregatesInput[]
    OR?: System_SettingsScalarWhereWithAggregatesInput[]
    NOT?: System_SettingsScalarWhereWithAggregatesInput | System_SettingsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"System_Settings"> | string
    key?: StringWithAggregatesFilter<"System_Settings"> | string
    value?: StringWithAggregatesFilter<"System_Settings"> | string
    description?: StringNullableWithAggregatesFilter<"System_Settings"> | string | null
  }

  export type RoleCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    users?: UserCreateNestedManyWithoutRoleInput
    rolesPermissions?: Roles_PermissionsCreateNestedManyWithoutRoleInput
    usersRoles?: Users_RolesCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    rolesPermissions?: Roles_PermissionsUncheckedCreateNestedManyWithoutRoleInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutRoleNestedInput
    rolesPermissions?: Roles_PermissionsUpdateManyWithoutRoleNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    rolesPermissions?: Roles_PermissionsUncheckedUpdateManyWithoutRoleNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type RoleCreateManyInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
  }

  export type RoleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RoleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserCreateInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RegionCreateInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    isActive?: boolean
    users?: UserCreateNestedManyWithoutRegionInput
  }

  export type RegionUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    isActive?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRegionInput
  }

  export type RegionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutRegionNestedInput
  }

  export type RegionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRegionNestedInput
  }

  export type RegionCreateManyInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    isActive?: boolean
  }

  export type RegionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Audit_LogsCreateInput = {
    id?: string
    action: string
    tableName: string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutAuditLogsInput
  }

  export type Audit_LogsUncheckedCreateInput = {
    id?: string
    userId: string
    action: string
    tableName: string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Audit_LogsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutAuditLogsNestedInput
  }

  export type Audit_LogsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogsCreateManyInput = {
    id?: string
    userId: string
    action: string
    tableName: string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Audit_LogsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutFilesInput
    contract?: ContractsCreateNestedOneWithoutFilesInput
  }

  export type FilesUncheckedCreateInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    userId?: string | null
    contractId?: string | null
    createdAt?: Date | string
  }

  export type FilesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFilesNestedInput
    contract?: ContractsUpdateOneWithoutFilesNestedInput
  }

  export type FilesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesCreateManyInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    userId?: string | null
    contractId?: string | null
    createdAt?: Date | string
  }

  export type FilesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PermissionsCreateInput = {
    id?: string
    code: string
    name: string
    module?: string | null
    rolesPermissions?: Roles_PermissionsCreateNestedManyWithoutPermissionInput
  }

  export type PermissionsUncheckedCreateInput = {
    id?: string
    code: string
    name: string
    module?: string | null
    rolesPermissions?: Roles_PermissionsUncheckedCreateNestedManyWithoutPermissionInput
  }

  export type PermissionsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    rolesPermissions?: Roles_PermissionsUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
    rolesPermissions?: Roles_PermissionsUncheckedUpdateManyWithoutPermissionNestedInput
  }

  export type PermissionsCreateManyInput = {
    id?: string
    code: string
    name: string
    module?: string | null
  }

  export type PermissionsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type Roles_PermissionsCreateInput = {
    role: RoleCreateNestedOneWithoutRolesPermissionsInput
    permission: PermissionsCreateNestedOneWithoutRolesPermissionsInput
  }

  export type Roles_PermissionsUncheckedCreateInput = {
    roleId: string
    permissionId: string
  }

  export type Roles_PermissionsUpdateInput = {
    role?: RoleUpdateOneRequiredWithoutRolesPermissionsNestedInput
    permission?: PermissionsUpdateOneRequiredWithoutRolesPermissionsNestedInput
  }

  export type Roles_PermissionsUncheckedUpdateInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type Roles_PermissionsCreateManyInput = {
    roleId: string
    permissionId: string
  }

  export type Roles_PermissionsUpdateManyMutationInput = {

  }

  export type Roles_PermissionsUncheckedUpdateManyInput = {
    roleId?: StringFieldUpdateOperationsInput | string
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type Users_RolesCreateInput = {
    user: UserCreateNestedOneWithoutUsersRolesInput
    role: RoleCreateNestedOneWithoutUsersRolesInput
  }

  export type Users_RolesUncheckedCreateInput = {
    userId: string
    roleId: string
  }

  export type Users_RolesUpdateInput = {
    user?: UserUpdateOneRequiredWithoutUsersRolesNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersRolesNestedInput
  }

  export type Users_RolesUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type Users_RolesCreateManyInput = {
    userId: string
    roleId: string
  }

  export type Users_RolesUpdateManyMutationInput = {

  }

  export type Users_RolesUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type ContractsCreateInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContractsInput
    renewals?: Contract_RenewalsCreateNestedManyWithoutContractInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutContractInput
    files?: FilesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: Contract_RenewalsUncheckedCreateNestedManyWithoutContractInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutContractInput
    files?: FilesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContractsNestedInput
    renewals?: Contract_RenewalsUpdateManyWithoutContractNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutContractNestedInput
    files?: FilesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: Contract_RenewalsUncheckedUpdateManyWithoutContractNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutContractNestedInput
    files?: FilesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractsCreateManyInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Import_HistoryCreateInput = {
    id?: string
    fileName: string
    module: string
    totalRows?: number
    successRows?: number
    failedRows?: number
    status: string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    uploader: UserCreateNestedOneWithoutImportHistoriesInput
  }

  export type Import_HistoryUncheckedCreateInput = {
    id?: string
    fileName: string
    uploadById: string
    module: string
    totalRows?: number
    successRows?: number
    failedRows?: number
    status: string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Import_HistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uploader?: UserUpdateOneRequiredWithoutImportHistoriesNestedInput
  }

  export type Import_HistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadById?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Import_HistoryCreateManyInput = {
    id?: string
    fileName: string
    uploadById: string
    module: string
    totalRows?: number
    successRows?: number
    failedRows?: number
    status: string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Import_HistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Import_HistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    uploadById?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesCreateInput = {
    id?: string
    content: string
    createdAt?: Date | string
    contract: ContractsCreateNestedOneWithoutCskhNotesInput
    creator: UserCreateNestedOneWithoutCskhNotesInput
  }

  export type Customer_Care_NotesUncheckedCreateInput = {
    id?: string
    contractId: string
    createdById: string
    content: string
    createdAt?: Date | string
  }

  export type Customer_Care_NotesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractsUpdateOneRequiredWithoutCskhNotesNestedInput
    creator?: UserUpdateOneRequiredWithoutCskhNotesNestedInput
  }

  export type Customer_Care_NotesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesCreateManyInput = {
    id?: string
    contractId: string
    createdById: string
    content: string
    createdAt?: Date | string
  }

  export type Customer_Care_NotesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_RenewalsCreateInput = {
    id?: string
    renewalDate: Date | string
    note?: string | null
    processedBy?: string | null
    createdAt?: Date | string
    contract: ContractsCreateNestedOneWithoutRenewalsInput
  }

  export type Contract_RenewalsUncheckedCreateInput = {
    id?: string
    contractId: string
    renewalDate: Date | string
    note?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type Contract_RenewalsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractsUpdateOneRequiredWithoutRenewalsNestedInput
  }

  export type Contract_RenewalsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_RenewalsCreateManyInput = {
    id?: string
    contractId: string
    renewalDate: Date | string
    note?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type Contract_RenewalsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_RenewalsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type System_SettingsCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
  }

  export type System_SettingsUncheckedCreateInput = {
    id?: string
    key: string
    value: string
    description?: string | null
  }

  export type System_SettingsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type System_SettingsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type System_SettingsCreateManyInput = {
    id?: string
    key: string
    value: string
    description?: string | null
  }

  export type System_SettingsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type System_SettingsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    key?: StringFieldUpdateOperationsInput | string
    value?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type Roles_PermissionsListRelationFilter = {
    every?: Roles_PermissionsWhereInput
    some?: Roles_PermissionsWhereInput
    none?: Roles_PermissionsWhereInput
  }

  export type Users_RolesListRelationFilter = {
    every?: Users_RolesWhereInput
    some?: Users_RolesWhereInput
    none?: Users_RolesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Roles_PermissionsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Users_RolesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RoleCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
  }

  export type RoleMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
  }

  export type RoleMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    description?: SortOrder
    is_active?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type RegionNullableScalarRelationFilter = {
    is?: RegionWhereInput | null
    isNot?: RegionWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type RoleScalarRelationFilter = {
    is?: RoleWhereInput
    isNot?: RoleWhereInput
  }

  export type ContractsListRelationFilter = {
    every?: ContractsWhereInput
    some?: ContractsWhereInput
    none?: ContractsWhereInput
  }

  export type Audit_LogsListRelationFilter = {
    every?: Audit_LogsWhereInput
    some?: Audit_LogsWhereInput
    none?: Audit_LogsWhereInput
  }

  export type FilesListRelationFilter = {
    every?: FilesWhereInput
    some?: FilesWhereInput
    none?: FilesWhereInput
  }

  export type Import_HistoryListRelationFilter = {
    every?: Import_HistoryWhereInput
    some?: Import_HistoryWhereInput
    none?: Import_HistoryWhereInput
  }

  export type Customer_Care_NotesListRelationFilter = {
    every?: Customer_Care_NotesWhereInput
    some?: Customer_Care_NotesWhereInput
    none?: Customer_Care_NotesWhereInput
  }

  export type ContractsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Audit_LogsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FilesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Import_HistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Customer_Care_NotesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    address?: SortOrder
    account_type?: SortOrder
    phone?: SortOrder
    joinDate?: SortOrder
    leaveDate?: SortOrder
    isActive?: SortOrder
    regionCode?: SortOrder
    seniorDeptManagerId?: SortOrder
    deptManagerId?: SortOrder
    managerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    address?: SortOrder
    account_type?: SortOrder
    phone?: SortOrder
    joinDate?: SortOrder
    leaveDate?: SortOrder
    isActive?: SortOrder
    regionCode?: SortOrder
    seniorDeptManagerId?: SortOrder
    deptManagerId?: SortOrder
    managerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    employeeCode?: SortOrder
    fullName?: SortOrder
    password?: SortOrder
    email?: SortOrder
    gender?: SortOrder
    dob?: SortOrder
    address?: SortOrder
    account_type?: SortOrder
    phone?: SortOrder
    joinDate?: SortOrder
    leaveDate?: SortOrder
    isActive?: SortOrder
    regionCode?: SortOrder
    seniorDeptManagerId?: SortOrder
    deptManagerId?: SortOrder
    managerId?: SortOrder
    roleId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type RegionCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }

  export type RegionMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }

  export type RegionMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    address?: SortOrder
    isActive?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type Audit_LogsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    oldData?: SortOrder
    newValue?: SortOrder
    createdAt?: SortOrder
  }

  export type Audit_LogsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    createdAt?: SortOrder
  }

  export type Audit_LogsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    action?: SortOrder
    tableName?: SortOrder
    createdAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ContractsNullableScalarRelationFilter = {
    is?: ContractsWhereInput | null
    isNot?: ContractsWhereInput | null
  }

  export type FilesCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileType?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
  }

  export type FilesMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileType?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
  }

  export type FilesMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    filePath?: SortOrder
    fileType?: SortOrder
    category?: SortOrder
    userId?: SortOrder
    contractId?: SortOrder
    createdAt?: SortOrder
  }

  export type PermissionsCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    module?: SortOrder
  }

  export type PermissionsMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    module?: SortOrder
  }

  export type PermissionsMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    name?: SortOrder
    module?: SortOrder
  }

  export type PermissionsScalarRelationFilter = {
    is?: PermissionsWhereInput
    isNot?: PermissionsWhereInput
  }

  export type Roles_PermissionsRoleIdPermissionIdCompoundUniqueInput = {
    roleId: string
    permissionId: string
  }

  export type Roles_PermissionsCountOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type Roles_PermissionsMaxOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type Roles_PermissionsMinOrderByAggregateInput = {
    roleId?: SortOrder
    permissionId?: SortOrder
  }

  export type Users_RolesUserIdRoleIdCompoundUniqueInput = {
    userId: string
    roleId: string
  }

  export type Users_RolesCountOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type Users_RolesMaxOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type Users_RolesMinOrderByAggregateInput = {
    userId?: SortOrder
    roleId?: SortOrder
  }

  export type DecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type Contract_RenewalsListRelationFilter = {
    every?: Contract_RenewalsWhereInput
    some?: Contract_RenewalsWhereInput
    none?: Contract_RenewalsWhereInput
  }

  export type Contract_RenewalsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ContractsCountOrderByAggregateInput = {
    id?: SortOrder
    contractCode?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractsAvgOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type ContractsMaxOrderByAggregateInput = {
    id?: SortOrder
    contractCode?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractsMinOrderByAggregateInput = {
    id?: SortOrder
    contractCode?: SortOrder
    title?: SortOrder
    type?: SortOrder
    status?: SortOrder
    totalAmount?: SortOrder
    createdById?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ContractsSumOrderByAggregateInput = {
    totalAmount?: SortOrder
  }

  export type DecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type Import_HistoryCountOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadById?: SortOrder
    module?: SortOrder
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
    status?: SortOrder
    errorLog?: SortOrder
    createdAt?: SortOrder
  }

  export type Import_HistoryAvgOrderByAggregateInput = {
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
  }

  export type Import_HistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadById?: SortOrder
    module?: SortOrder
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type Import_HistoryMinOrderByAggregateInput = {
    id?: SortOrder
    fileName?: SortOrder
    uploadById?: SortOrder
    module?: SortOrder
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
  }

  export type Import_HistorySumOrderByAggregateInput = {
    totalRows?: SortOrder
    successRows?: SortOrder
    failedRows?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ContractsScalarRelationFilter = {
    is?: ContractsWhereInput
    isNot?: ContractsWhereInput
  }

  export type Customer_Care_NotesCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    createdById?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type Customer_Care_NotesMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    createdById?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type Customer_Care_NotesMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    createdById?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
  }

  export type Contract_RenewalsCountOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    renewalDate?: SortOrder
    note?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type Contract_RenewalsMaxOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    renewalDate?: SortOrder
    note?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type Contract_RenewalsMinOrderByAggregateInput = {
    id?: SortOrder
    contractId?: SortOrder
    renewalDate?: SortOrder
    note?: SortOrder
    processedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type System_SettingsCountOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type System_SettingsMaxOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type System_SettingsMinOrderByAggregateInput = {
    id?: SortOrder
    key?: SortOrder
    value?: SortOrder
    description?: SortOrder
  }

  export type UserCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type Roles_PermissionsCreateNestedManyWithoutRoleInput = {
    create?: XOR<Roles_PermissionsCreateWithoutRoleInput, Roles_PermissionsUncheckedCreateWithoutRoleInput> | Roles_PermissionsCreateWithoutRoleInput[] | Roles_PermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutRoleInput | Roles_PermissionsCreateOrConnectWithoutRoleInput[]
    createMany?: Roles_PermissionsCreateManyRoleInputEnvelope
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
  }

  export type Users_RolesCreateNestedManyWithoutRoleInput = {
    create?: XOR<Users_RolesCreateWithoutRoleInput, Users_RolesUncheckedCreateWithoutRoleInput> | Users_RolesCreateWithoutRoleInput[] | Users_RolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutRoleInput | Users_RolesCreateOrConnectWithoutRoleInput[]
    createMany?: Users_RolesCreateManyRoleInputEnvelope
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type Roles_PermissionsUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Roles_PermissionsCreateWithoutRoleInput, Roles_PermissionsUncheckedCreateWithoutRoleInput> | Roles_PermissionsCreateWithoutRoleInput[] | Roles_PermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutRoleInput | Roles_PermissionsCreateOrConnectWithoutRoleInput[]
    createMany?: Roles_PermissionsCreateManyRoleInputEnvelope
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
  }

  export type Users_RolesUncheckedCreateNestedManyWithoutRoleInput = {
    create?: XOR<Users_RolesCreateWithoutRoleInput, Users_RolesUncheckedCreateWithoutRoleInput> | Users_RolesCreateWithoutRoleInput[] | Users_RolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutRoleInput | Users_RolesCreateOrConnectWithoutRoleInput[]
    createMany?: Users_RolesCreateManyRoleInputEnvelope
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type Roles_PermissionsUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Roles_PermissionsCreateWithoutRoleInput, Roles_PermissionsUncheckedCreateWithoutRoleInput> | Roles_PermissionsCreateWithoutRoleInput[] | Roles_PermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutRoleInput | Roles_PermissionsCreateOrConnectWithoutRoleInput[]
    upsert?: Roles_PermissionsUpsertWithWhereUniqueWithoutRoleInput | Roles_PermissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Roles_PermissionsCreateManyRoleInputEnvelope
    set?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    disconnect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    delete?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    update?: Roles_PermissionsUpdateWithWhereUniqueWithoutRoleInput | Roles_PermissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Roles_PermissionsUpdateManyWithWhereWithoutRoleInput | Roles_PermissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Roles_PermissionsScalarWhereInput | Roles_PermissionsScalarWhereInput[]
  }

  export type Users_RolesUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Users_RolesCreateWithoutRoleInput, Users_RolesUncheckedCreateWithoutRoleInput> | Users_RolesCreateWithoutRoleInput[] | Users_RolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutRoleInput | Users_RolesCreateOrConnectWithoutRoleInput[]
    upsert?: Users_RolesUpsertWithWhereUniqueWithoutRoleInput | Users_RolesUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Users_RolesCreateManyRoleInputEnvelope
    set?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    disconnect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    delete?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    update?: Users_RolesUpdateWithWhereUniqueWithoutRoleInput | Users_RolesUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Users_RolesUpdateManyWithWhereWithoutRoleInput | Users_RolesUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Users_RolesScalarWhereInput | Users_RolesScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput> | UserCreateWithoutRoleInput[] | UserUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRoleInput | UserCreateOrConnectWithoutRoleInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRoleInput | UserUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: UserCreateManyRoleInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRoleInput | UserUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRoleInput | UserUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type Roles_PermissionsUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Roles_PermissionsCreateWithoutRoleInput, Roles_PermissionsUncheckedCreateWithoutRoleInput> | Roles_PermissionsCreateWithoutRoleInput[] | Roles_PermissionsUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutRoleInput | Roles_PermissionsCreateOrConnectWithoutRoleInput[]
    upsert?: Roles_PermissionsUpsertWithWhereUniqueWithoutRoleInput | Roles_PermissionsUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Roles_PermissionsCreateManyRoleInputEnvelope
    set?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    disconnect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    delete?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    update?: Roles_PermissionsUpdateWithWhereUniqueWithoutRoleInput | Roles_PermissionsUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Roles_PermissionsUpdateManyWithWhereWithoutRoleInput | Roles_PermissionsUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Roles_PermissionsScalarWhereInput | Roles_PermissionsScalarWhereInput[]
  }

  export type Users_RolesUncheckedUpdateManyWithoutRoleNestedInput = {
    create?: XOR<Users_RolesCreateWithoutRoleInput, Users_RolesUncheckedCreateWithoutRoleInput> | Users_RolesCreateWithoutRoleInput[] | Users_RolesUncheckedCreateWithoutRoleInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutRoleInput | Users_RolesCreateOrConnectWithoutRoleInput[]
    upsert?: Users_RolesUpsertWithWhereUniqueWithoutRoleInput | Users_RolesUpsertWithWhereUniqueWithoutRoleInput[]
    createMany?: Users_RolesCreateManyRoleInputEnvelope
    set?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    disconnect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    delete?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    update?: Users_RolesUpdateWithWhereUniqueWithoutRoleInput | Users_RolesUpdateWithWhereUniqueWithoutRoleInput[]
    updateMany?: Users_RolesUpdateManyWithWhereWithoutRoleInput | Users_RolesUpdateManyWithWhereWithoutRoleInput[]
    deleteMany?: Users_RolesScalarWhereInput | Users_RolesScalarWhereInput[]
  }

  export type RegionCreateNestedOneWithoutUsersInput = {
    create?: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUsersInput
    connect?: RegionWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSeniorDeptSubsInput = {
    create?: XOR<UserCreateWithoutSeniorDeptSubsInput, UserUncheckedCreateWithoutSeniorDeptSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeniorDeptSubsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutSeniorDeptManagerInput = {
    create?: XOR<UserCreateWithoutSeniorDeptManagerInput, UserUncheckedCreateWithoutSeniorDeptManagerInput> | UserCreateWithoutSeniorDeptManagerInput[] | UserUncheckedCreateWithoutSeniorDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSeniorDeptManagerInput | UserCreateOrConnectWithoutSeniorDeptManagerInput[]
    createMany?: UserCreateManySeniorDeptManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDeptSubsInput = {
    create?: XOR<UserCreateWithoutDeptSubsInput, UserUncheckedCreateWithoutDeptSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeptSubsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDeptManagerInput = {
    create?: XOR<UserCreateWithoutDeptManagerInput, UserUncheckedCreateWithoutDeptManagerInput> | UserCreateWithoutDeptManagerInput[] | UserUncheckedCreateWithoutDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeptManagerInput | UserCreateOrConnectWithoutDeptManagerInput[]
    createMany?: UserCreateManyDeptManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutDirectSubsInput = {
    create?: XOR<UserCreateWithoutDirectSubsInput, UserUncheckedCreateWithoutDirectSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectSubsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type RoleCreateNestedOneWithoutUsersInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    connect?: RoleWhereUniqueInput
  }

  export type ContractsCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContractsCreateWithoutCreatorInput, ContractsUncheckedCreateWithoutCreatorInput> | ContractsCreateWithoutCreatorInput[] | ContractsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutCreatorInput | ContractsCreateOrConnectWithoutCreatorInput[]
    createMany?: ContractsCreateManyCreatorInputEnvelope
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
  }

  export type Audit_LogsCreateNestedManyWithoutUserInput = {
    create?: XOR<Audit_LogsCreateWithoutUserInput, Audit_LogsUncheckedCreateWithoutUserInput> | Audit_LogsCreateWithoutUserInput[] | Audit_LogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogsCreateOrConnectWithoutUserInput | Audit_LogsCreateOrConnectWithoutUserInput[]
    createMany?: Audit_LogsCreateManyUserInputEnvelope
    connect?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
  }

  export type FilesCreateNestedManyWithoutUserInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type Users_RolesCreateNestedManyWithoutUserInput = {
    create?: XOR<Users_RolesCreateWithoutUserInput, Users_RolesUncheckedCreateWithoutUserInput> | Users_RolesCreateWithoutUserInput[] | Users_RolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutUserInput | Users_RolesCreateOrConnectWithoutUserInput[]
    createMany?: Users_RolesCreateManyUserInputEnvelope
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
  }

  export type Import_HistoryCreateNestedManyWithoutUploaderInput = {
    create?: XOR<Import_HistoryCreateWithoutUploaderInput, Import_HistoryUncheckedCreateWithoutUploaderInput> | Import_HistoryCreateWithoutUploaderInput[] | Import_HistoryUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: Import_HistoryCreateOrConnectWithoutUploaderInput | Import_HistoryCreateOrConnectWithoutUploaderInput[]
    createMany?: Import_HistoryCreateManyUploaderInputEnvelope
    connect?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
  }

  export type Customer_Care_NotesCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutCreatorInput, Customer_Care_NotesUncheckedCreateWithoutCreatorInput> | Customer_Care_NotesCreateWithoutCreatorInput[] | Customer_Care_NotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutCreatorInput | Customer_Care_NotesCreateOrConnectWithoutCreatorInput[]
    createMany?: Customer_Care_NotesCreateManyCreatorInputEnvelope
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput = {
    create?: XOR<UserCreateWithoutSeniorDeptManagerInput, UserUncheckedCreateWithoutSeniorDeptManagerInput> | UserCreateWithoutSeniorDeptManagerInput[] | UserUncheckedCreateWithoutSeniorDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSeniorDeptManagerInput | UserCreateOrConnectWithoutSeniorDeptManagerInput[]
    createMany?: UserCreateManySeniorDeptManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDeptManagerInput = {
    create?: XOR<UserCreateWithoutDeptManagerInput, UserUncheckedCreateWithoutDeptManagerInput> | UserCreateWithoutDeptManagerInput[] | UserUncheckedCreateWithoutDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeptManagerInput | UserCreateOrConnectWithoutDeptManagerInput[]
    createMany?: UserCreateManyDeptManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutManagerInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type ContractsUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<ContractsCreateWithoutCreatorInput, ContractsUncheckedCreateWithoutCreatorInput> | ContractsCreateWithoutCreatorInput[] | ContractsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutCreatorInput | ContractsCreateOrConnectWithoutCreatorInput[]
    createMany?: ContractsCreateManyCreatorInputEnvelope
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
  }

  export type Audit_LogsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Audit_LogsCreateWithoutUserInput, Audit_LogsUncheckedCreateWithoutUserInput> | Audit_LogsCreateWithoutUserInput[] | Audit_LogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogsCreateOrConnectWithoutUserInput | Audit_LogsCreateOrConnectWithoutUserInput[]
    createMany?: Audit_LogsCreateManyUserInputEnvelope
    connect?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type Users_RolesUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Users_RolesCreateWithoutUserInput, Users_RolesUncheckedCreateWithoutUserInput> | Users_RolesCreateWithoutUserInput[] | Users_RolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutUserInput | Users_RolesCreateOrConnectWithoutUserInput[]
    createMany?: Users_RolesCreateManyUserInputEnvelope
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
  }

  export type Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput = {
    create?: XOR<Import_HistoryCreateWithoutUploaderInput, Import_HistoryUncheckedCreateWithoutUploaderInput> | Import_HistoryCreateWithoutUploaderInput[] | Import_HistoryUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: Import_HistoryCreateOrConnectWithoutUploaderInput | Import_HistoryCreateOrConnectWithoutUploaderInput[]
    createMany?: Import_HistoryCreateManyUploaderInputEnvelope
    connect?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
  }

  export type Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutCreatorInput, Customer_Care_NotesUncheckedCreateWithoutCreatorInput> | Customer_Care_NotesCreateWithoutCreatorInput[] | Customer_Care_NotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutCreatorInput | Customer_Care_NotesCreateOrConnectWithoutCreatorInput[]
    createMany?: Customer_Care_NotesCreateManyCreatorInputEnvelope
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type RegionUpdateOneWithoutUsersNestedInput = {
    create?: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RegionCreateOrConnectWithoutUsersInput
    upsert?: RegionUpsertWithoutUsersInput
    disconnect?: RegionWhereInput | boolean
    delete?: RegionWhereInput | boolean
    connect?: RegionWhereUniqueInput
    update?: XOR<XOR<RegionUpdateToOneWithWhereWithoutUsersInput, RegionUpdateWithoutUsersInput>, RegionUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutSeniorDeptSubsNestedInput = {
    create?: XOR<UserCreateWithoutSeniorDeptSubsInput, UserUncheckedCreateWithoutSeniorDeptSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSeniorDeptSubsInput
    upsert?: UserUpsertWithoutSeniorDeptSubsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSeniorDeptSubsInput, UserUpdateWithoutSeniorDeptSubsInput>, UserUncheckedUpdateWithoutSeniorDeptSubsInput>
  }

  export type UserUpdateManyWithoutSeniorDeptManagerNestedInput = {
    create?: XOR<UserCreateWithoutSeniorDeptManagerInput, UserUncheckedCreateWithoutSeniorDeptManagerInput> | UserCreateWithoutSeniorDeptManagerInput[] | UserUncheckedCreateWithoutSeniorDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSeniorDeptManagerInput | UserCreateOrConnectWithoutSeniorDeptManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSeniorDeptManagerInput | UserUpsertWithWhereUniqueWithoutSeniorDeptManagerInput[]
    createMany?: UserCreateManySeniorDeptManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSeniorDeptManagerInput | UserUpdateWithWhereUniqueWithoutSeniorDeptManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSeniorDeptManagerInput | UserUpdateManyWithWhereWithoutSeniorDeptManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutDeptSubsNestedInput = {
    create?: XOR<UserCreateWithoutDeptSubsInput, UserUncheckedCreateWithoutDeptSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeptSubsInput
    upsert?: UserUpsertWithoutDeptSubsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeptSubsInput, UserUpdateWithoutDeptSubsInput>, UserUncheckedUpdateWithoutDeptSubsInput>
  }

  export type UserUpdateManyWithoutDeptManagerNestedInput = {
    create?: XOR<UserCreateWithoutDeptManagerInput, UserUncheckedCreateWithoutDeptManagerInput> | UserCreateWithoutDeptManagerInput[] | UserUncheckedCreateWithoutDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeptManagerInput | UserCreateOrConnectWithoutDeptManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeptManagerInput | UserUpsertWithWhereUniqueWithoutDeptManagerInput[]
    createMany?: UserCreateManyDeptManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeptManagerInput | UserUpdateWithWhereUniqueWithoutDeptManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeptManagerInput | UserUpdateManyWithWhereWithoutDeptManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateOneWithoutDirectSubsNestedInput = {
    create?: XOR<UserCreateWithoutDirectSubsInput, UserUncheckedCreateWithoutDirectSubsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDirectSubsInput
    upsert?: UserUpsertWithoutDirectSubsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDirectSubsInput, UserUpdateWithoutDirectSubsInput>, UserUncheckedUpdateWithoutDirectSubsInput>
  }

  export type UserUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type RoleUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersInput
    upsert?: RoleUpsertWithoutUsersInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersInput, RoleUpdateWithoutUsersInput>, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type ContractsUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContractsCreateWithoutCreatorInput, ContractsUncheckedCreateWithoutCreatorInput> | ContractsCreateWithoutCreatorInput[] | ContractsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutCreatorInput | ContractsCreateOrConnectWithoutCreatorInput[]
    upsert?: ContractsUpsertWithWhereUniqueWithoutCreatorInput | ContractsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContractsCreateManyCreatorInputEnvelope
    set?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    disconnect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    delete?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    update?: ContractsUpdateWithWhereUniqueWithoutCreatorInput | ContractsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContractsUpdateManyWithWhereWithoutCreatorInput | ContractsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
  }

  export type Audit_LogsUpdateManyWithoutUserNestedInput = {
    create?: XOR<Audit_LogsCreateWithoutUserInput, Audit_LogsUncheckedCreateWithoutUserInput> | Audit_LogsCreateWithoutUserInput[] | Audit_LogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogsCreateOrConnectWithoutUserInput | Audit_LogsCreateOrConnectWithoutUserInput[]
    upsert?: Audit_LogsUpsertWithWhereUniqueWithoutUserInput | Audit_LogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Audit_LogsCreateManyUserInputEnvelope
    set?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    disconnect?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    delete?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    connect?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    update?: Audit_LogsUpdateWithWhereUniqueWithoutUserInput | Audit_LogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Audit_LogsUpdateManyWithWhereWithoutUserInput | Audit_LogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Audit_LogsScalarWhereInput | Audit_LogsScalarWhereInput[]
  }

  export type FilesUpdateManyWithoutUserNestedInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutUserInput | FilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutUserInput | FilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutUserInput | FilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type Users_RolesUpdateManyWithoutUserNestedInput = {
    create?: XOR<Users_RolesCreateWithoutUserInput, Users_RolesUncheckedCreateWithoutUserInput> | Users_RolesCreateWithoutUserInput[] | Users_RolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutUserInput | Users_RolesCreateOrConnectWithoutUserInput[]
    upsert?: Users_RolesUpsertWithWhereUniqueWithoutUserInput | Users_RolesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Users_RolesCreateManyUserInputEnvelope
    set?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    disconnect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    delete?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    update?: Users_RolesUpdateWithWhereUniqueWithoutUserInput | Users_RolesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Users_RolesUpdateManyWithWhereWithoutUserInput | Users_RolesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Users_RolesScalarWhereInput | Users_RolesScalarWhereInput[]
  }

  export type Import_HistoryUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<Import_HistoryCreateWithoutUploaderInput, Import_HistoryUncheckedCreateWithoutUploaderInput> | Import_HistoryCreateWithoutUploaderInput[] | Import_HistoryUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: Import_HistoryCreateOrConnectWithoutUploaderInput | Import_HistoryCreateOrConnectWithoutUploaderInput[]
    upsert?: Import_HistoryUpsertWithWhereUniqueWithoutUploaderInput | Import_HistoryUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: Import_HistoryCreateManyUploaderInputEnvelope
    set?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    disconnect?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    delete?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    connect?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    update?: Import_HistoryUpdateWithWhereUniqueWithoutUploaderInput | Import_HistoryUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: Import_HistoryUpdateManyWithWhereWithoutUploaderInput | Import_HistoryUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: Import_HistoryScalarWhereInput | Import_HistoryScalarWhereInput[]
  }

  export type Customer_Care_NotesUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutCreatorInput, Customer_Care_NotesUncheckedCreateWithoutCreatorInput> | Customer_Care_NotesCreateWithoutCreatorInput[] | Customer_Care_NotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutCreatorInput | Customer_Care_NotesCreateOrConnectWithoutCreatorInput[]
    upsert?: Customer_Care_NotesUpsertWithWhereUniqueWithoutCreatorInput | Customer_Care_NotesUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: Customer_Care_NotesCreateManyCreatorInputEnvelope
    set?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    disconnect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    delete?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    update?: Customer_Care_NotesUpdateWithWhereUniqueWithoutCreatorInput | Customer_Care_NotesUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: Customer_Care_NotesUpdateManyWithWhereWithoutCreatorInput | Customer_Care_NotesUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: Customer_Care_NotesScalarWhereInput | Customer_Care_NotesScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput = {
    create?: XOR<UserCreateWithoutSeniorDeptManagerInput, UserUncheckedCreateWithoutSeniorDeptManagerInput> | UserCreateWithoutSeniorDeptManagerInput[] | UserUncheckedCreateWithoutSeniorDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutSeniorDeptManagerInput | UserCreateOrConnectWithoutSeniorDeptManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutSeniorDeptManagerInput | UserUpsertWithWhereUniqueWithoutSeniorDeptManagerInput[]
    createMany?: UserCreateManySeniorDeptManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutSeniorDeptManagerInput | UserUpdateWithWhereUniqueWithoutSeniorDeptManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutSeniorDeptManagerInput | UserUpdateManyWithWhereWithoutSeniorDeptManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDeptManagerNestedInput = {
    create?: XOR<UserCreateWithoutDeptManagerInput, UserUncheckedCreateWithoutDeptManagerInput> | UserCreateWithoutDeptManagerInput[] | UserUncheckedCreateWithoutDeptManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeptManagerInput | UserCreateOrConnectWithoutDeptManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeptManagerInput | UserUpsertWithWhereUniqueWithoutDeptManagerInput[]
    createMany?: UserCreateManyDeptManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeptManagerInput | UserUpdateWithWhereUniqueWithoutDeptManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeptManagerInput | UserUpdateManyWithWhereWithoutDeptManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutManagerNestedInput = {
    create?: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput> | UserCreateWithoutManagerInput[] | UserUncheckedCreateWithoutManagerInput[]
    connectOrCreate?: UserCreateOrConnectWithoutManagerInput | UserCreateOrConnectWithoutManagerInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutManagerInput | UserUpsertWithWhereUniqueWithoutManagerInput[]
    createMany?: UserCreateManyManagerInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutManagerInput | UserUpdateWithWhereUniqueWithoutManagerInput[]
    updateMany?: UserUpdateManyWithWhereWithoutManagerInput | UserUpdateManyWithWhereWithoutManagerInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type ContractsUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<ContractsCreateWithoutCreatorInput, ContractsUncheckedCreateWithoutCreatorInput> | ContractsCreateWithoutCreatorInput[] | ContractsUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: ContractsCreateOrConnectWithoutCreatorInput | ContractsCreateOrConnectWithoutCreatorInput[]
    upsert?: ContractsUpsertWithWhereUniqueWithoutCreatorInput | ContractsUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: ContractsCreateManyCreatorInputEnvelope
    set?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    disconnect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    delete?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    connect?: ContractsWhereUniqueInput | ContractsWhereUniqueInput[]
    update?: ContractsUpdateWithWhereUniqueWithoutCreatorInput | ContractsUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: ContractsUpdateManyWithWhereWithoutCreatorInput | ContractsUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
  }

  export type Audit_LogsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Audit_LogsCreateWithoutUserInput, Audit_LogsUncheckedCreateWithoutUserInput> | Audit_LogsCreateWithoutUserInput[] | Audit_LogsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Audit_LogsCreateOrConnectWithoutUserInput | Audit_LogsCreateOrConnectWithoutUserInput[]
    upsert?: Audit_LogsUpsertWithWhereUniqueWithoutUserInput | Audit_LogsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Audit_LogsCreateManyUserInputEnvelope
    set?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    disconnect?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    delete?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    connect?: Audit_LogsWhereUniqueInput | Audit_LogsWhereUniqueInput[]
    update?: Audit_LogsUpdateWithWhereUniqueWithoutUserInput | Audit_LogsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Audit_LogsUpdateManyWithWhereWithoutUserInput | Audit_LogsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Audit_LogsScalarWhereInput | Audit_LogsScalarWhereInput[]
  }

  export type FilesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput> | FilesCreateWithoutUserInput[] | FilesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutUserInput | FilesCreateOrConnectWithoutUserInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutUserInput | FilesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FilesCreateManyUserInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutUserInput | FilesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutUserInput | FilesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type Users_RolesUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Users_RolesCreateWithoutUserInput, Users_RolesUncheckedCreateWithoutUserInput> | Users_RolesCreateWithoutUserInput[] | Users_RolesUncheckedCreateWithoutUserInput[]
    connectOrCreate?: Users_RolesCreateOrConnectWithoutUserInput | Users_RolesCreateOrConnectWithoutUserInput[]
    upsert?: Users_RolesUpsertWithWhereUniqueWithoutUserInput | Users_RolesUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: Users_RolesCreateManyUserInputEnvelope
    set?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    disconnect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    delete?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    connect?: Users_RolesWhereUniqueInput | Users_RolesWhereUniqueInput[]
    update?: Users_RolesUpdateWithWhereUniqueWithoutUserInput | Users_RolesUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: Users_RolesUpdateManyWithWhereWithoutUserInput | Users_RolesUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: Users_RolesScalarWhereInput | Users_RolesScalarWhereInput[]
  }

  export type Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput = {
    create?: XOR<Import_HistoryCreateWithoutUploaderInput, Import_HistoryUncheckedCreateWithoutUploaderInput> | Import_HistoryCreateWithoutUploaderInput[] | Import_HistoryUncheckedCreateWithoutUploaderInput[]
    connectOrCreate?: Import_HistoryCreateOrConnectWithoutUploaderInput | Import_HistoryCreateOrConnectWithoutUploaderInput[]
    upsert?: Import_HistoryUpsertWithWhereUniqueWithoutUploaderInput | Import_HistoryUpsertWithWhereUniqueWithoutUploaderInput[]
    createMany?: Import_HistoryCreateManyUploaderInputEnvelope
    set?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    disconnect?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    delete?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    connect?: Import_HistoryWhereUniqueInput | Import_HistoryWhereUniqueInput[]
    update?: Import_HistoryUpdateWithWhereUniqueWithoutUploaderInput | Import_HistoryUpdateWithWhereUniqueWithoutUploaderInput[]
    updateMany?: Import_HistoryUpdateManyWithWhereWithoutUploaderInput | Import_HistoryUpdateManyWithWhereWithoutUploaderInput[]
    deleteMany?: Import_HistoryScalarWhereInput | Import_HistoryScalarWhereInput[]
  }

  export type Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutCreatorInput, Customer_Care_NotesUncheckedCreateWithoutCreatorInput> | Customer_Care_NotesCreateWithoutCreatorInput[] | Customer_Care_NotesUncheckedCreateWithoutCreatorInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutCreatorInput | Customer_Care_NotesCreateOrConnectWithoutCreatorInput[]
    upsert?: Customer_Care_NotesUpsertWithWhereUniqueWithoutCreatorInput | Customer_Care_NotesUpsertWithWhereUniqueWithoutCreatorInput[]
    createMany?: Customer_Care_NotesCreateManyCreatorInputEnvelope
    set?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    disconnect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    delete?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    update?: Customer_Care_NotesUpdateWithWhereUniqueWithoutCreatorInput | Customer_Care_NotesUpdateWithWhereUniqueWithoutCreatorInput[]
    updateMany?: Customer_Care_NotesUpdateManyWithWhereWithoutCreatorInput | Customer_Care_NotesUpdateManyWithWhereWithoutCreatorInput[]
    deleteMany?: Customer_Care_NotesScalarWhereInput | Customer_Care_NotesScalarWhereInput[]
  }

  export type UserCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutRegionInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegionInput | UserUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegionInput | UserUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegionInput | UserUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutRegionNestedInput = {
    create?: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput> | UserCreateWithoutRegionInput[] | UserUncheckedCreateWithoutRegionInput[]
    connectOrCreate?: UserCreateOrConnectWithoutRegionInput | UserCreateOrConnectWithoutRegionInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutRegionInput | UserUpsertWithWhereUniqueWithoutRegionInput[]
    createMany?: UserCreateManyRegionInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutRegionInput | UserUpdateWithWhereUniqueWithoutRegionInput[]
    updateMany?: UserUpdateManyWithWhereWithoutRegionInput | UserUpdateManyWithWhereWithoutRegionInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAuditLogsInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutAuditLogsNestedInput = {
    create?: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAuditLogsInput
    upsert?: UserUpsertWithoutAuditLogsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAuditLogsInput, UserUpdateWithoutAuditLogsInput>, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserCreateNestedOneWithoutFilesInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    connect?: UserWhereUniqueInput
  }

  export type ContractsCreateNestedOneWithoutFilesInput = {
    create?: XOR<ContractsCreateWithoutFilesInput, ContractsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutFilesInput
    connect?: ContractsWhereUniqueInput
  }

  export type UserUpdateOneWithoutFilesNestedInput = {
    create?: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFilesInput
    upsert?: UserUpsertWithoutFilesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFilesInput, UserUpdateWithoutFilesInput>, UserUncheckedUpdateWithoutFilesInput>
  }

  export type ContractsUpdateOneWithoutFilesNestedInput = {
    create?: XOR<ContractsCreateWithoutFilesInput, ContractsUncheckedCreateWithoutFilesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutFilesInput
    upsert?: ContractsUpsertWithoutFilesInput
    disconnect?: ContractsWhereInput | boolean
    delete?: ContractsWhereInput | boolean
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutFilesInput, ContractsUpdateWithoutFilesInput>, ContractsUncheckedUpdateWithoutFilesInput>
  }

  export type Roles_PermissionsCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Roles_PermissionsCreateWithoutPermissionInput, Roles_PermissionsUncheckedCreateWithoutPermissionInput> | Roles_PermissionsCreateWithoutPermissionInput[] | Roles_PermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutPermissionInput | Roles_PermissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: Roles_PermissionsCreateManyPermissionInputEnvelope
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
  }

  export type Roles_PermissionsUncheckedCreateNestedManyWithoutPermissionInput = {
    create?: XOR<Roles_PermissionsCreateWithoutPermissionInput, Roles_PermissionsUncheckedCreateWithoutPermissionInput> | Roles_PermissionsCreateWithoutPermissionInput[] | Roles_PermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutPermissionInput | Roles_PermissionsCreateOrConnectWithoutPermissionInput[]
    createMany?: Roles_PermissionsCreateManyPermissionInputEnvelope
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
  }

  export type Roles_PermissionsUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Roles_PermissionsCreateWithoutPermissionInput, Roles_PermissionsUncheckedCreateWithoutPermissionInput> | Roles_PermissionsCreateWithoutPermissionInput[] | Roles_PermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutPermissionInput | Roles_PermissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: Roles_PermissionsUpsertWithWhereUniqueWithoutPermissionInput | Roles_PermissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: Roles_PermissionsCreateManyPermissionInputEnvelope
    set?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    disconnect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    delete?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    update?: Roles_PermissionsUpdateWithWhereUniqueWithoutPermissionInput | Roles_PermissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: Roles_PermissionsUpdateManyWithWhereWithoutPermissionInput | Roles_PermissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: Roles_PermissionsScalarWhereInput | Roles_PermissionsScalarWhereInput[]
  }

  export type Roles_PermissionsUncheckedUpdateManyWithoutPermissionNestedInput = {
    create?: XOR<Roles_PermissionsCreateWithoutPermissionInput, Roles_PermissionsUncheckedCreateWithoutPermissionInput> | Roles_PermissionsCreateWithoutPermissionInput[] | Roles_PermissionsUncheckedCreateWithoutPermissionInput[]
    connectOrCreate?: Roles_PermissionsCreateOrConnectWithoutPermissionInput | Roles_PermissionsCreateOrConnectWithoutPermissionInput[]
    upsert?: Roles_PermissionsUpsertWithWhereUniqueWithoutPermissionInput | Roles_PermissionsUpsertWithWhereUniqueWithoutPermissionInput[]
    createMany?: Roles_PermissionsCreateManyPermissionInputEnvelope
    set?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    disconnect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    delete?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    connect?: Roles_PermissionsWhereUniqueInput | Roles_PermissionsWhereUniqueInput[]
    update?: Roles_PermissionsUpdateWithWhereUniqueWithoutPermissionInput | Roles_PermissionsUpdateWithWhereUniqueWithoutPermissionInput[]
    updateMany?: Roles_PermissionsUpdateManyWithWhereWithoutPermissionInput | Roles_PermissionsUpdateManyWithWhereWithoutPermissionInput[]
    deleteMany?: Roles_PermissionsScalarWhereInput | Roles_PermissionsScalarWhereInput[]
  }

  export type RoleCreateNestedOneWithoutRolesPermissionsInput = {
    create?: XOR<RoleCreateWithoutRolesPermissionsInput, RoleUncheckedCreateWithoutRolesPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolesPermissionsInput
    connect?: RoleWhereUniqueInput
  }

  export type PermissionsCreateNestedOneWithoutRolesPermissionsInput = {
    create?: XOR<PermissionsCreateWithoutRolesPermissionsInput, PermissionsUncheckedCreateWithoutRolesPermissionsInput>
    connectOrCreate?: PermissionsCreateOrConnectWithoutRolesPermissionsInput
    connect?: PermissionsWhereUniqueInput
  }

  export type RoleUpdateOneRequiredWithoutRolesPermissionsNestedInput = {
    create?: XOR<RoleCreateWithoutRolesPermissionsInput, RoleUncheckedCreateWithoutRolesPermissionsInput>
    connectOrCreate?: RoleCreateOrConnectWithoutRolesPermissionsInput
    upsert?: RoleUpsertWithoutRolesPermissionsInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutRolesPermissionsInput, RoleUpdateWithoutRolesPermissionsInput>, RoleUncheckedUpdateWithoutRolesPermissionsInput>
  }

  export type PermissionsUpdateOneRequiredWithoutRolesPermissionsNestedInput = {
    create?: XOR<PermissionsCreateWithoutRolesPermissionsInput, PermissionsUncheckedCreateWithoutRolesPermissionsInput>
    connectOrCreate?: PermissionsCreateOrConnectWithoutRolesPermissionsInput
    upsert?: PermissionsUpsertWithoutRolesPermissionsInput
    connect?: PermissionsWhereUniqueInput
    update?: XOR<XOR<PermissionsUpdateToOneWithWhereWithoutRolesPermissionsInput, PermissionsUpdateWithoutRolesPermissionsInput>, PermissionsUncheckedUpdateWithoutRolesPermissionsInput>
  }

  export type UserCreateNestedOneWithoutUsersRolesInput = {
    create?: XOR<UserCreateWithoutUsersRolesInput, UserUncheckedCreateWithoutUsersRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersRolesInput
    connect?: UserWhereUniqueInput
  }

  export type RoleCreateNestedOneWithoutUsersRolesInput = {
    create?: XOR<RoleCreateWithoutUsersRolesInput, RoleUncheckedCreateWithoutUsersRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersRolesInput
    connect?: RoleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUsersRolesNestedInput = {
    create?: XOR<UserCreateWithoutUsersRolesInput, UserUncheckedCreateWithoutUsersRolesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUsersRolesInput
    upsert?: UserUpsertWithoutUsersRolesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUsersRolesInput, UserUpdateWithoutUsersRolesInput>, UserUncheckedUpdateWithoutUsersRolesInput>
  }

  export type RoleUpdateOneRequiredWithoutUsersRolesNestedInput = {
    create?: XOR<RoleCreateWithoutUsersRolesInput, RoleUncheckedCreateWithoutUsersRolesInput>
    connectOrCreate?: RoleCreateOrConnectWithoutUsersRolesInput
    upsert?: RoleUpsertWithoutUsersRolesInput
    connect?: RoleWhereUniqueInput
    update?: XOR<XOR<RoleUpdateToOneWithWhereWithoutUsersRolesInput, RoleUpdateWithoutUsersRolesInput>, RoleUncheckedUpdateWithoutUsersRolesInput>
  }

  export type UserCreateNestedOneWithoutContractsInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    connect?: UserWhereUniqueInput
  }

  export type Contract_RenewalsCreateNestedManyWithoutContractInput = {
    create?: XOR<Contract_RenewalsCreateWithoutContractInput, Contract_RenewalsUncheckedCreateWithoutContractInput> | Contract_RenewalsCreateWithoutContractInput[] | Contract_RenewalsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Contract_RenewalsCreateOrConnectWithoutContractInput | Contract_RenewalsCreateOrConnectWithoutContractInput[]
    createMany?: Contract_RenewalsCreateManyContractInputEnvelope
    connect?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
  }

  export type Customer_Care_NotesCreateNestedManyWithoutContractInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutContractInput, Customer_Care_NotesUncheckedCreateWithoutContractInput> | Customer_Care_NotesCreateWithoutContractInput[] | Customer_Care_NotesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutContractInput | Customer_Care_NotesCreateOrConnectWithoutContractInput[]
    createMany?: Customer_Care_NotesCreateManyContractInputEnvelope
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
  }

  export type FilesCreateNestedManyWithoutContractInput = {
    create?: XOR<FilesCreateWithoutContractInput, FilesUncheckedCreateWithoutContractInput> | FilesCreateWithoutContractInput[] | FilesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutContractInput | FilesCreateOrConnectWithoutContractInput[]
    createMany?: FilesCreateManyContractInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type Contract_RenewalsUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<Contract_RenewalsCreateWithoutContractInput, Contract_RenewalsUncheckedCreateWithoutContractInput> | Contract_RenewalsCreateWithoutContractInput[] | Contract_RenewalsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Contract_RenewalsCreateOrConnectWithoutContractInput | Contract_RenewalsCreateOrConnectWithoutContractInput[]
    createMany?: Contract_RenewalsCreateManyContractInputEnvelope
    connect?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
  }

  export type Customer_Care_NotesUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutContractInput, Customer_Care_NotesUncheckedCreateWithoutContractInput> | Customer_Care_NotesCreateWithoutContractInput[] | Customer_Care_NotesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutContractInput | Customer_Care_NotesCreateOrConnectWithoutContractInput[]
    createMany?: Customer_Care_NotesCreateManyContractInputEnvelope
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
  }

  export type FilesUncheckedCreateNestedManyWithoutContractInput = {
    create?: XOR<FilesCreateWithoutContractInput, FilesUncheckedCreateWithoutContractInput> | FilesCreateWithoutContractInput[] | FilesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutContractInput | FilesCreateOrConnectWithoutContractInput[]
    createMany?: FilesCreateManyContractInputEnvelope
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
  }

  export type NullableDecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string | null
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type UserUpdateOneRequiredWithoutContractsNestedInput = {
    create?: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    connectOrCreate?: UserCreateOrConnectWithoutContractsInput
    upsert?: UserUpsertWithoutContractsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutContractsInput, UserUpdateWithoutContractsInput>, UserUncheckedUpdateWithoutContractsInput>
  }

  export type Contract_RenewalsUpdateManyWithoutContractNestedInput = {
    create?: XOR<Contract_RenewalsCreateWithoutContractInput, Contract_RenewalsUncheckedCreateWithoutContractInput> | Contract_RenewalsCreateWithoutContractInput[] | Contract_RenewalsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Contract_RenewalsCreateOrConnectWithoutContractInput | Contract_RenewalsCreateOrConnectWithoutContractInput[]
    upsert?: Contract_RenewalsUpsertWithWhereUniqueWithoutContractInput | Contract_RenewalsUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: Contract_RenewalsCreateManyContractInputEnvelope
    set?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    disconnect?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    delete?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    connect?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    update?: Contract_RenewalsUpdateWithWhereUniqueWithoutContractInput | Contract_RenewalsUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: Contract_RenewalsUpdateManyWithWhereWithoutContractInput | Contract_RenewalsUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: Contract_RenewalsScalarWhereInput | Contract_RenewalsScalarWhereInput[]
  }

  export type Customer_Care_NotesUpdateManyWithoutContractNestedInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutContractInput, Customer_Care_NotesUncheckedCreateWithoutContractInput> | Customer_Care_NotesCreateWithoutContractInput[] | Customer_Care_NotesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutContractInput | Customer_Care_NotesCreateOrConnectWithoutContractInput[]
    upsert?: Customer_Care_NotesUpsertWithWhereUniqueWithoutContractInput | Customer_Care_NotesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: Customer_Care_NotesCreateManyContractInputEnvelope
    set?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    disconnect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    delete?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    update?: Customer_Care_NotesUpdateWithWhereUniqueWithoutContractInput | Customer_Care_NotesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: Customer_Care_NotesUpdateManyWithWhereWithoutContractInput | Customer_Care_NotesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: Customer_Care_NotesScalarWhereInput | Customer_Care_NotesScalarWhereInput[]
  }

  export type FilesUpdateManyWithoutContractNestedInput = {
    create?: XOR<FilesCreateWithoutContractInput, FilesUncheckedCreateWithoutContractInput> | FilesCreateWithoutContractInput[] | FilesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutContractInput | FilesCreateOrConnectWithoutContractInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutContractInput | FilesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: FilesCreateManyContractInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutContractInput | FilesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutContractInput | FilesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type Contract_RenewalsUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<Contract_RenewalsCreateWithoutContractInput, Contract_RenewalsUncheckedCreateWithoutContractInput> | Contract_RenewalsCreateWithoutContractInput[] | Contract_RenewalsUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Contract_RenewalsCreateOrConnectWithoutContractInput | Contract_RenewalsCreateOrConnectWithoutContractInput[]
    upsert?: Contract_RenewalsUpsertWithWhereUniqueWithoutContractInput | Contract_RenewalsUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: Contract_RenewalsCreateManyContractInputEnvelope
    set?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    disconnect?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    delete?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    connect?: Contract_RenewalsWhereUniqueInput | Contract_RenewalsWhereUniqueInput[]
    update?: Contract_RenewalsUpdateWithWhereUniqueWithoutContractInput | Contract_RenewalsUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: Contract_RenewalsUpdateManyWithWhereWithoutContractInput | Contract_RenewalsUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: Contract_RenewalsScalarWhereInput | Contract_RenewalsScalarWhereInput[]
  }

  export type Customer_Care_NotesUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<Customer_Care_NotesCreateWithoutContractInput, Customer_Care_NotesUncheckedCreateWithoutContractInput> | Customer_Care_NotesCreateWithoutContractInput[] | Customer_Care_NotesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: Customer_Care_NotesCreateOrConnectWithoutContractInput | Customer_Care_NotesCreateOrConnectWithoutContractInput[]
    upsert?: Customer_Care_NotesUpsertWithWhereUniqueWithoutContractInput | Customer_Care_NotesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: Customer_Care_NotesCreateManyContractInputEnvelope
    set?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    disconnect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    delete?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    connect?: Customer_Care_NotesWhereUniqueInput | Customer_Care_NotesWhereUniqueInput[]
    update?: Customer_Care_NotesUpdateWithWhereUniqueWithoutContractInput | Customer_Care_NotesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: Customer_Care_NotesUpdateManyWithWhereWithoutContractInput | Customer_Care_NotesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: Customer_Care_NotesScalarWhereInput | Customer_Care_NotesScalarWhereInput[]
  }

  export type FilesUncheckedUpdateManyWithoutContractNestedInput = {
    create?: XOR<FilesCreateWithoutContractInput, FilesUncheckedCreateWithoutContractInput> | FilesCreateWithoutContractInput[] | FilesUncheckedCreateWithoutContractInput[]
    connectOrCreate?: FilesCreateOrConnectWithoutContractInput | FilesCreateOrConnectWithoutContractInput[]
    upsert?: FilesUpsertWithWhereUniqueWithoutContractInput | FilesUpsertWithWhereUniqueWithoutContractInput[]
    createMany?: FilesCreateManyContractInputEnvelope
    set?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    disconnect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    delete?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    connect?: FilesWhereUniqueInput | FilesWhereUniqueInput[]
    update?: FilesUpdateWithWhereUniqueWithoutContractInput | FilesUpdateWithWhereUniqueWithoutContractInput[]
    updateMany?: FilesUpdateManyWithWhereWithoutContractInput | FilesUpdateManyWithWhereWithoutContractInput[]
    deleteMany?: FilesScalarWhereInput | FilesScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutImportHistoriesInput = {
    create?: XOR<UserCreateWithoutImportHistoriesInput, UserUncheckedCreateWithoutImportHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutImportHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutImportHistoriesInput, UserUncheckedCreateWithoutImportHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutImportHistoriesInput
    upsert?: UserUpsertWithoutImportHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutImportHistoriesInput, UserUpdateWithoutImportHistoriesInput>, UserUncheckedUpdateWithoutImportHistoriesInput>
  }

  export type ContractsCreateNestedOneWithoutCskhNotesInput = {
    create?: XOR<ContractsCreateWithoutCskhNotesInput, ContractsUncheckedCreateWithoutCskhNotesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutCskhNotesInput
    connect?: ContractsWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCskhNotesInput = {
    create?: XOR<UserCreateWithoutCskhNotesInput, UserUncheckedCreateWithoutCskhNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCskhNotesInput
    connect?: UserWhereUniqueInput
  }

  export type ContractsUpdateOneRequiredWithoutCskhNotesNestedInput = {
    create?: XOR<ContractsCreateWithoutCskhNotesInput, ContractsUncheckedCreateWithoutCskhNotesInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutCskhNotesInput
    upsert?: ContractsUpsertWithoutCskhNotesInput
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutCskhNotesInput, ContractsUpdateWithoutCskhNotesInput>, ContractsUncheckedUpdateWithoutCskhNotesInput>
  }

  export type UserUpdateOneRequiredWithoutCskhNotesNestedInput = {
    create?: XOR<UserCreateWithoutCskhNotesInput, UserUncheckedCreateWithoutCskhNotesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCskhNotesInput
    upsert?: UserUpsertWithoutCskhNotesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCskhNotesInput, UserUpdateWithoutCskhNotesInput>, UserUncheckedUpdateWithoutCskhNotesInput>
  }

  export type ContractsCreateNestedOneWithoutRenewalsInput = {
    create?: XOR<ContractsCreateWithoutRenewalsInput, ContractsUncheckedCreateWithoutRenewalsInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutRenewalsInput
    connect?: ContractsWhereUniqueInput
  }

  export type ContractsUpdateOneRequiredWithoutRenewalsNestedInput = {
    create?: XOR<ContractsCreateWithoutRenewalsInput, ContractsUncheckedCreateWithoutRenewalsInput>
    connectOrCreate?: ContractsCreateOrConnectWithoutRenewalsInput
    upsert?: ContractsUpsertWithoutRenewalsInput
    connect?: ContractsWhereUniqueInput
    update?: XOR<XOR<ContractsUpdateToOneWithWhereWithoutRenewalsInput, ContractsUpdateWithoutRenewalsInput>, ContractsUncheckedUpdateWithoutRenewalsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type NestedDecimalNullableFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
  }

  export type NestedDecimalNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel> | null
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel> | null
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalNullableWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedDecimalNullableFilter<$PrismaModel>
    _sum?: NestedDecimalNullableFilter<$PrismaModel>
    _min?: NestedDecimalNullableFilter<$PrismaModel>
    _max?: NestedDecimalNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserCreateWithoutRoleInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRoleInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRoleInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserCreateManyRoleInputEnvelope = {
    data: UserCreateManyRoleInput | UserCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type Roles_PermissionsCreateWithoutRoleInput = {
    permission: PermissionsCreateNestedOneWithoutRolesPermissionsInput
  }

  export type Roles_PermissionsUncheckedCreateWithoutRoleInput = {
    permissionId: string
  }

  export type Roles_PermissionsCreateOrConnectWithoutRoleInput = {
    where: Roles_PermissionsWhereUniqueInput
    create: XOR<Roles_PermissionsCreateWithoutRoleInput, Roles_PermissionsUncheckedCreateWithoutRoleInput>
  }

  export type Roles_PermissionsCreateManyRoleInputEnvelope = {
    data: Roles_PermissionsCreateManyRoleInput | Roles_PermissionsCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type Users_RolesCreateWithoutRoleInput = {
    user: UserCreateNestedOneWithoutUsersRolesInput
  }

  export type Users_RolesUncheckedCreateWithoutRoleInput = {
    userId: string
  }

  export type Users_RolesCreateOrConnectWithoutRoleInput = {
    where: Users_RolesWhereUniqueInput
    create: XOR<Users_RolesCreateWithoutRoleInput, Users_RolesUncheckedCreateWithoutRoleInput>
  }

  export type Users_RolesCreateManyRoleInputEnvelope = {
    data: Users_RolesCreateManyRoleInput | Users_RolesCreateManyRoleInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
    create: XOR<UserCreateWithoutRoleInput, UserUncheckedCreateWithoutRoleInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRoleInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRoleInput, UserUncheckedUpdateWithoutRoleInput>
  }

  export type UserUpdateManyWithWhereWithoutRoleInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRoleInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    employeeCode?: StringNullableFilter<"User"> | string | null
    fullName?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    email?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    dob?: DateTimeNullableFilter<"User"> | Date | string | null
    address?: StringNullableFilter<"User"> | string | null
    account_type?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    joinDate?: DateTimeNullableFilter<"User"> | Date | string | null
    leaveDate?: DateTimeNullableFilter<"User"> | Date | string | null
    isActive?: BoolFilter<"User"> | boolean
    regionCode?: StringNullableFilter<"User"> | string | null
    seniorDeptManagerId?: StringNullableFilter<"User"> | string | null
    deptManagerId?: StringNullableFilter<"User"> | string | null
    managerId?: StringNullableFilter<"User"> | string | null
    roleId?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
  }

  export type Roles_PermissionsUpsertWithWhereUniqueWithoutRoleInput = {
    where: Roles_PermissionsWhereUniqueInput
    update: XOR<Roles_PermissionsUpdateWithoutRoleInput, Roles_PermissionsUncheckedUpdateWithoutRoleInput>
    create: XOR<Roles_PermissionsCreateWithoutRoleInput, Roles_PermissionsUncheckedCreateWithoutRoleInput>
  }

  export type Roles_PermissionsUpdateWithWhereUniqueWithoutRoleInput = {
    where: Roles_PermissionsWhereUniqueInput
    data: XOR<Roles_PermissionsUpdateWithoutRoleInput, Roles_PermissionsUncheckedUpdateWithoutRoleInput>
  }

  export type Roles_PermissionsUpdateManyWithWhereWithoutRoleInput = {
    where: Roles_PermissionsScalarWhereInput
    data: XOR<Roles_PermissionsUpdateManyMutationInput, Roles_PermissionsUncheckedUpdateManyWithoutRoleInput>
  }

  export type Roles_PermissionsScalarWhereInput = {
    AND?: Roles_PermissionsScalarWhereInput | Roles_PermissionsScalarWhereInput[]
    OR?: Roles_PermissionsScalarWhereInput[]
    NOT?: Roles_PermissionsScalarWhereInput | Roles_PermissionsScalarWhereInput[]
    roleId?: StringFilter<"Roles_Permissions"> | string
    permissionId?: StringFilter<"Roles_Permissions"> | string
  }

  export type Users_RolesUpsertWithWhereUniqueWithoutRoleInput = {
    where: Users_RolesWhereUniqueInput
    update: XOR<Users_RolesUpdateWithoutRoleInput, Users_RolesUncheckedUpdateWithoutRoleInput>
    create: XOR<Users_RolesCreateWithoutRoleInput, Users_RolesUncheckedCreateWithoutRoleInput>
  }

  export type Users_RolesUpdateWithWhereUniqueWithoutRoleInput = {
    where: Users_RolesWhereUniqueInput
    data: XOR<Users_RolesUpdateWithoutRoleInput, Users_RolesUncheckedUpdateWithoutRoleInput>
  }

  export type Users_RolesUpdateManyWithWhereWithoutRoleInput = {
    where: Users_RolesScalarWhereInput
    data: XOR<Users_RolesUpdateManyMutationInput, Users_RolesUncheckedUpdateManyWithoutRoleInput>
  }

  export type Users_RolesScalarWhereInput = {
    AND?: Users_RolesScalarWhereInput | Users_RolesScalarWhereInput[]
    OR?: Users_RolesScalarWhereInput[]
    NOT?: Users_RolesScalarWhereInput | Users_RolesScalarWhereInput[]
    userId?: StringFilter<"Users_Roles"> | string
    roleId?: StringFilter<"Users_Roles"> | string
  }

  export type RegionCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    isActive?: boolean
  }

  export type RegionUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    address?: string | null
    isActive?: boolean
  }

  export type RegionCreateOrConnectWithoutUsersInput = {
    where: RegionWhereUniqueInput
    create: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutSeniorDeptSubsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSeniorDeptSubsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSeniorDeptSubsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeniorDeptSubsInput, UserUncheckedCreateWithoutSeniorDeptSubsInput>
  }

  export type UserCreateWithoutSeniorDeptManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutSeniorDeptManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutSeniorDeptManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSeniorDeptManagerInput, UserUncheckedCreateWithoutSeniorDeptManagerInput>
  }

  export type UserCreateManySeniorDeptManagerInputEnvelope = {
    data: UserCreateManySeniorDeptManagerInput | UserCreateManySeniorDeptManagerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDeptSubsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDeptSubsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDeptSubsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeptSubsInput, UserUncheckedCreateWithoutDeptSubsInput>
  }

  export type UserCreateWithoutDeptManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDeptManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDeptManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeptManagerInput, UserUncheckedCreateWithoutDeptManagerInput>
  }

  export type UserCreateManyDeptManagerInputEnvelope = {
    data: UserCreateManyDeptManagerInput | UserCreateManyDeptManagerInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDirectSubsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutDirectSubsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutDirectSubsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDirectSubsInput, UserUncheckedCreateWithoutDirectSubsInput>
  }

  export type UserCreateWithoutManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutManagerInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserCreateManyManagerInputEnvelope = {
    data: UserCreateManyManagerInput | UserCreateManyManagerInput[]
    skipDuplicates?: boolean
  }

  export type RoleCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    rolesPermissions?: Roles_PermissionsCreateNestedManyWithoutRoleInput
    usersRoles?: Users_RolesCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    rolesPermissions?: Roles_PermissionsUncheckedCreateNestedManyWithoutRoleInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
  }

  export type ContractsCreateWithoutCreatorInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: Contract_RenewalsCreateNestedManyWithoutContractInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutContractInput
    files?: FilesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutCreatorInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: Contract_RenewalsUncheckedCreateNestedManyWithoutContractInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutContractInput
    files?: FilesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutCreatorInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutCreatorInput, ContractsUncheckedCreateWithoutCreatorInput>
  }

  export type ContractsCreateManyCreatorInputEnvelope = {
    data: ContractsCreateManyCreatorInput | ContractsCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type Audit_LogsCreateWithoutUserInput = {
    id?: string
    action: string
    tableName: string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Audit_LogsUncheckedCreateWithoutUserInput = {
    id?: string
    action: string
    tableName: string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Audit_LogsCreateOrConnectWithoutUserInput = {
    where: Audit_LogsWhereUniqueInput
    create: XOR<Audit_LogsCreateWithoutUserInput, Audit_LogsUncheckedCreateWithoutUserInput>
  }

  export type Audit_LogsCreateManyUserInputEnvelope = {
    data: Audit_LogsCreateManyUserInput | Audit_LogsCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FilesCreateWithoutUserInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    createdAt?: Date | string
    contract?: ContractsCreateNestedOneWithoutFilesInput
  }

  export type FilesUncheckedCreateWithoutUserInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    contractId?: string | null
    createdAt?: Date | string
  }

  export type FilesCreateOrConnectWithoutUserInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput>
  }

  export type FilesCreateManyUserInputEnvelope = {
    data: FilesCreateManyUserInput | FilesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Users_RolesCreateWithoutUserInput = {
    role: RoleCreateNestedOneWithoutUsersRolesInput
  }

  export type Users_RolesUncheckedCreateWithoutUserInput = {
    roleId: string
  }

  export type Users_RolesCreateOrConnectWithoutUserInput = {
    where: Users_RolesWhereUniqueInput
    create: XOR<Users_RolesCreateWithoutUserInput, Users_RolesUncheckedCreateWithoutUserInput>
  }

  export type Users_RolesCreateManyUserInputEnvelope = {
    data: Users_RolesCreateManyUserInput | Users_RolesCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type Import_HistoryCreateWithoutUploaderInput = {
    id?: string
    fileName: string
    module: string
    totalRows?: number
    successRows?: number
    failedRows?: number
    status: string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Import_HistoryUncheckedCreateWithoutUploaderInput = {
    id?: string
    fileName: string
    module: string
    totalRows?: number
    successRows?: number
    failedRows?: number
    status: string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Import_HistoryCreateOrConnectWithoutUploaderInput = {
    where: Import_HistoryWhereUniqueInput
    create: XOR<Import_HistoryCreateWithoutUploaderInput, Import_HistoryUncheckedCreateWithoutUploaderInput>
  }

  export type Import_HistoryCreateManyUploaderInputEnvelope = {
    data: Import_HistoryCreateManyUploaderInput | Import_HistoryCreateManyUploaderInput[]
    skipDuplicates?: boolean
  }

  export type Customer_Care_NotesCreateWithoutCreatorInput = {
    id?: string
    content: string
    createdAt?: Date | string
    contract: ContractsCreateNestedOneWithoutCskhNotesInput
  }

  export type Customer_Care_NotesUncheckedCreateWithoutCreatorInput = {
    id?: string
    contractId: string
    content: string
    createdAt?: Date | string
  }

  export type Customer_Care_NotesCreateOrConnectWithoutCreatorInput = {
    where: Customer_Care_NotesWhereUniqueInput
    create: XOR<Customer_Care_NotesCreateWithoutCreatorInput, Customer_Care_NotesUncheckedCreateWithoutCreatorInput>
  }

  export type Customer_Care_NotesCreateManyCreatorInputEnvelope = {
    data: Customer_Care_NotesCreateManyCreatorInput | Customer_Care_NotesCreateManyCreatorInput[]
    skipDuplicates?: boolean
  }

  export type RegionUpsertWithoutUsersInput = {
    update: XOR<RegionUpdateWithoutUsersInput, RegionUncheckedUpdateWithoutUsersInput>
    create: XOR<RegionCreateWithoutUsersInput, RegionUncheckedCreateWithoutUsersInput>
    where?: RegionWhereInput
  }

  export type RegionUpdateToOneWithWhereWithoutUsersInput = {
    where?: RegionWhereInput
    data: XOR<RegionUpdateWithoutUsersInput, RegionUncheckedUpdateWithoutUsersInput>
  }

  export type RegionUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type RegionUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpsertWithoutSeniorDeptSubsInput = {
    update: XOR<UserUpdateWithoutSeniorDeptSubsInput, UserUncheckedUpdateWithoutSeniorDeptSubsInput>
    create: XOR<UserCreateWithoutSeniorDeptSubsInput, UserUncheckedCreateWithoutSeniorDeptSubsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSeniorDeptSubsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSeniorDeptSubsInput, UserUncheckedUpdateWithoutSeniorDeptSubsInput>
  }

  export type UserUpdateWithoutSeniorDeptSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSeniorDeptSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutSeniorDeptManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutSeniorDeptManagerInput, UserUncheckedUpdateWithoutSeniorDeptManagerInput>
    create: XOR<UserCreateWithoutSeniorDeptManagerInput, UserUncheckedCreateWithoutSeniorDeptManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutSeniorDeptManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutSeniorDeptManagerInput, UserUncheckedUpdateWithoutSeniorDeptManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutSeniorDeptManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutSeniorDeptManagerInput>
  }

  export type UserUpsertWithoutDeptSubsInput = {
    update: XOR<UserUpdateWithoutDeptSubsInput, UserUncheckedUpdateWithoutDeptSubsInput>
    create: XOR<UserCreateWithoutDeptSubsInput, UserUncheckedCreateWithoutDeptSubsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeptSubsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeptSubsInput, UserUncheckedUpdateWithoutDeptSubsInput>
  }

  export type UserUpdateWithoutDeptSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeptSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDeptManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDeptManagerInput, UserUncheckedUpdateWithoutDeptManagerInput>
    create: XOR<UserCreateWithoutDeptManagerInput, UserUncheckedCreateWithoutDeptManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDeptManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDeptManagerInput, UserUncheckedUpdateWithoutDeptManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutDeptManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDeptManagerInput>
  }

  export type UserUpsertWithoutDirectSubsInput = {
    update: XOR<UserUpdateWithoutDirectSubsInput, UserUncheckedUpdateWithoutDirectSubsInput>
    create: XOR<UserCreateWithoutDirectSubsInput, UserUncheckedCreateWithoutDirectSubsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDirectSubsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDirectSubsInput, UserUncheckedUpdateWithoutDirectSubsInput>
  }

  export type UserUpdateWithoutDirectSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDirectSubsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
    create: XOR<UserCreateWithoutManagerInput, UserUncheckedCreateWithoutManagerInput>
  }

  export type UserUpdateWithWhereUniqueWithoutManagerInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutManagerInput, UserUncheckedUpdateWithoutManagerInput>
  }

  export type UserUpdateManyWithWhereWithoutManagerInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutManagerInput>
  }

  export type RoleUpsertWithoutUsersInput = {
    update: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
    create: XOR<RoleCreateWithoutUsersInput, RoleUncheckedCreateWithoutUsersInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersInput, RoleUncheckedUpdateWithoutUsersInput>
  }

  export type RoleUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    rolesPermissions?: Roles_PermissionsUpdateManyWithoutRoleNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    rolesPermissions?: Roles_PermissionsUncheckedUpdateManyWithoutRoleNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type ContractsUpsertWithWhereUniqueWithoutCreatorInput = {
    where: ContractsWhereUniqueInput
    update: XOR<ContractsUpdateWithoutCreatorInput, ContractsUncheckedUpdateWithoutCreatorInput>
    create: XOR<ContractsCreateWithoutCreatorInput, ContractsUncheckedCreateWithoutCreatorInput>
  }

  export type ContractsUpdateWithWhereUniqueWithoutCreatorInput = {
    where: ContractsWhereUniqueInput
    data: XOR<ContractsUpdateWithoutCreatorInput, ContractsUncheckedUpdateWithoutCreatorInput>
  }

  export type ContractsUpdateManyWithWhereWithoutCreatorInput = {
    where: ContractsScalarWhereInput
    data: XOR<ContractsUpdateManyMutationInput, ContractsUncheckedUpdateManyWithoutCreatorInput>
  }

  export type ContractsScalarWhereInput = {
    AND?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
    OR?: ContractsScalarWhereInput[]
    NOT?: ContractsScalarWhereInput | ContractsScalarWhereInput[]
    id?: StringFilter<"Contracts"> | string
    contractCode?: StringFilter<"Contracts"> | string
    title?: StringFilter<"Contracts"> | string
    type?: StringFilter<"Contracts"> | string
    status?: StringFilter<"Contracts"> | string
    totalAmount?: DecimalNullableFilter<"Contracts"> | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFilter<"Contracts"> | string
    createdAt?: DateTimeFilter<"Contracts"> | Date | string
    updatedAt?: DateTimeFilter<"Contracts"> | Date | string
  }

  export type Audit_LogsUpsertWithWhereUniqueWithoutUserInput = {
    where: Audit_LogsWhereUniqueInput
    update: XOR<Audit_LogsUpdateWithoutUserInput, Audit_LogsUncheckedUpdateWithoutUserInput>
    create: XOR<Audit_LogsCreateWithoutUserInput, Audit_LogsUncheckedCreateWithoutUserInput>
  }

  export type Audit_LogsUpdateWithWhereUniqueWithoutUserInput = {
    where: Audit_LogsWhereUniqueInput
    data: XOR<Audit_LogsUpdateWithoutUserInput, Audit_LogsUncheckedUpdateWithoutUserInput>
  }

  export type Audit_LogsUpdateManyWithWhereWithoutUserInput = {
    where: Audit_LogsScalarWhereInput
    data: XOR<Audit_LogsUpdateManyMutationInput, Audit_LogsUncheckedUpdateManyWithoutUserInput>
  }

  export type Audit_LogsScalarWhereInput = {
    AND?: Audit_LogsScalarWhereInput | Audit_LogsScalarWhereInput[]
    OR?: Audit_LogsScalarWhereInput[]
    NOT?: Audit_LogsScalarWhereInput | Audit_LogsScalarWhereInput[]
    id?: StringFilter<"Audit_Logs"> | string
    userId?: StringFilter<"Audit_Logs"> | string
    action?: StringFilter<"Audit_Logs"> | string
    tableName?: StringFilter<"Audit_Logs"> | string
    oldData?: JsonNullableFilter<"Audit_Logs">
    newValue?: JsonNullableFilter<"Audit_Logs">
    createdAt?: DateTimeFilter<"Audit_Logs"> | Date | string
  }

  export type FilesUpsertWithWhereUniqueWithoutUserInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutUserInput, FilesUncheckedUpdateWithoutUserInput>
    create: XOR<FilesCreateWithoutUserInput, FilesUncheckedCreateWithoutUserInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutUserInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutUserInput, FilesUncheckedUpdateWithoutUserInput>
  }

  export type FilesUpdateManyWithWhereWithoutUserInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutUserInput>
  }

  export type FilesScalarWhereInput = {
    AND?: FilesScalarWhereInput | FilesScalarWhereInput[]
    OR?: FilesScalarWhereInput[]
    NOT?: FilesScalarWhereInput | FilesScalarWhereInput[]
    id?: StringFilter<"Files"> | string
    fileName?: StringFilter<"Files"> | string
    filePath?: StringFilter<"Files"> | string
    fileType?: StringFilter<"Files"> | string
    category?: StringFilter<"Files"> | string
    userId?: StringNullableFilter<"Files"> | string | null
    contractId?: StringNullableFilter<"Files"> | string | null
    createdAt?: DateTimeFilter<"Files"> | Date | string
  }

  export type Users_RolesUpsertWithWhereUniqueWithoutUserInput = {
    where: Users_RolesWhereUniqueInput
    update: XOR<Users_RolesUpdateWithoutUserInput, Users_RolesUncheckedUpdateWithoutUserInput>
    create: XOR<Users_RolesCreateWithoutUserInput, Users_RolesUncheckedCreateWithoutUserInput>
  }

  export type Users_RolesUpdateWithWhereUniqueWithoutUserInput = {
    where: Users_RolesWhereUniqueInput
    data: XOR<Users_RolesUpdateWithoutUserInput, Users_RolesUncheckedUpdateWithoutUserInput>
  }

  export type Users_RolesUpdateManyWithWhereWithoutUserInput = {
    where: Users_RolesScalarWhereInput
    data: XOR<Users_RolesUpdateManyMutationInput, Users_RolesUncheckedUpdateManyWithoutUserInput>
  }

  export type Import_HistoryUpsertWithWhereUniqueWithoutUploaderInput = {
    where: Import_HistoryWhereUniqueInput
    update: XOR<Import_HistoryUpdateWithoutUploaderInput, Import_HistoryUncheckedUpdateWithoutUploaderInput>
    create: XOR<Import_HistoryCreateWithoutUploaderInput, Import_HistoryUncheckedCreateWithoutUploaderInput>
  }

  export type Import_HistoryUpdateWithWhereUniqueWithoutUploaderInput = {
    where: Import_HistoryWhereUniqueInput
    data: XOR<Import_HistoryUpdateWithoutUploaderInput, Import_HistoryUncheckedUpdateWithoutUploaderInput>
  }

  export type Import_HistoryUpdateManyWithWhereWithoutUploaderInput = {
    where: Import_HistoryScalarWhereInput
    data: XOR<Import_HistoryUpdateManyMutationInput, Import_HistoryUncheckedUpdateManyWithoutUploaderInput>
  }

  export type Import_HistoryScalarWhereInput = {
    AND?: Import_HistoryScalarWhereInput | Import_HistoryScalarWhereInput[]
    OR?: Import_HistoryScalarWhereInput[]
    NOT?: Import_HistoryScalarWhereInput | Import_HistoryScalarWhereInput[]
    id?: StringFilter<"Import_History"> | string
    fileName?: StringFilter<"Import_History"> | string
    uploadById?: StringFilter<"Import_History"> | string
    module?: StringFilter<"Import_History"> | string
    totalRows?: IntFilter<"Import_History"> | number
    successRows?: IntFilter<"Import_History"> | number
    failedRows?: IntFilter<"Import_History"> | number
    status?: StringFilter<"Import_History"> | string
    errorLog?: JsonNullableFilter<"Import_History">
    createdAt?: DateTimeFilter<"Import_History"> | Date | string
  }

  export type Customer_Care_NotesUpsertWithWhereUniqueWithoutCreatorInput = {
    where: Customer_Care_NotesWhereUniqueInput
    update: XOR<Customer_Care_NotesUpdateWithoutCreatorInput, Customer_Care_NotesUncheckedUpdateWithoutCreatorInput>
    create: XOR<Customer_Care_NotesCreateWithoutCreatorInput, Customer_Care_NotesUncheckedCreateWithoutCreatorInput>
  }

  export type Customer_Care_NotesUpdateWithWhereUniqueWithoutCreatorInput = {
    where: Customer_Care_NotesWhereUniqueInput
    data: XOR<Customer_Care_NotesUpdateWithoutCreatorInput, Customer_Care_NotesUncheckedUpdateWithoutCreatorInput>
  }

  export type Customer_Care_NotesUpdateManyWithWhereWithoutCreatorInput = {
    where: Customer_Care_NotesScalarWhereInput
    data: XOR<Customer_Care_NotesUpdateManyMutationInput, Customer_Care_NotesUncheckedUpdateManyWithoutCreatorInput>
  }

  export type Customer_Care_NotesScalarWhereInput = {
    AND?: Customer_Care_NotesScalarWhereInput | Customer_Care_NotesScalarWhereInput[]
    OR?: Customer_Care_NotesScalarWhereInput[]
    NOT?: Customer_Care_NotesScalarWhereInput | Customer_Care_NotesScalarWhereInput[]
    id?: StringFilter<"Customer_Care_Notes"> | string
    contractId?: StringFilter<"Customer_Care_Notes"> | string
    createdById?: StringFilter<"Customer_Care_Notes"> | string
    content?: StringFilter<"Customer_Care_Notes"> | string
    createdAt?: DateTimeFilter<"Customer_Care_Notes"> | Date | string
  }

  export type UserCreateWithoutRegionInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutRegionInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutRegionInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput>
  }

  export type UserCreateManyRegionInputEnvelope = {
    data: UserCreateManyRegionInput | UserCreateManyRegionInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithWhereUniqueWithoutRegionInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutRegionInput, UserUncheckedUpdateWithoutRegionInput>
    create: XOR<UserCreateWithoutRegionInput, UserUncheckedCreateWithoutRegionInput>
  }

  export type UserUpdateWithWhereUniqueWithoutRegionInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutRegionInput, UserUncheckedUpdateWithoutRegionInput>
  }

  export type UserUpdateManyWithWhereWithoutRegionInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutRegionInput>
  }

  export type UserCreateWithoutAuditLogsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutAuditLogsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutAuditLogsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
  }

  export type UserUpsertWithoutAuditLogsInput = {
    update: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
    create: XOR<UserCreateWithoutAuditLogsInput, UserUncheckedCreateWithoutAuditLogsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAuditLogsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAuditLogsInput, UserUncheckedUpdateWithoutAuditLogsInput>
  }

  export type UserUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutAuditLogsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserCreateWithoutFilesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutFilesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutFilesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
  }

  export type ContractsCreateWithoutFilesInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContractsInput
    renewals?: Contract_RenewalsCreateNestedManyWithoutContractInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutFilesInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: Contract_RenewalsUncheckedCreateNestedManyWithoutContractInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutFilesInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutFilesInput, ContractsUncheckedCreateWithoutFilesInput>
  }

  export type UserUpsertWithoutFilesInput = {
    update: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
    create: XOR<UserCreateWithoutFilesInput, UserUncheckedCreateWithoutFilesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFilesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFilesInput, UserUncheckedUpdateWithoutFilesInput>
  }

  export type UserUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ContractsUpsertWithoutFilesInput = {
    update: XOR<ContractsUpdateWithoutFilesInput, ContractsUncheckedUpdateWithoutFilesInput>
    create: XOR<ContractsCreateWithoutFilesInput, ContractsUncheckedCreateWithoutFilesInput>
    where?: ContractsWhereInput
  }

  export type ContractsUpdateToOneWithWhereWithoutFilesInput = {
    where?: ContractsWhereInput
    data: XOR<ContractsUpdateWithoutFilesInput, ContractsUncheckedUpdateWithoutFilesInput>
  }

  export type ContractsUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContractsNestedInput
    renewals?: Contract_RenewalsUpdateManyWithoutContractNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutFilesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: Contract_RenewalsUncheckedUpdateManyWithoutContractNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type Roles_PermissionsCreateWithoutPermissionInput = {
    role: RoleCreateNestedOneWithoutRolesPermissionsInput
  }

  export type Roles_PermissionsUncheckedCreateWithoutPermissionInput = {
    roleId: string
  }

  export type Roles_PermissionsCreateOrConnectWithoutPermissionInput = {
    where: Roles_PermissionsWhereUniqueInput
    create: XOR<Roles_PermissionsCreateWithoutPermissionInput, Roles_PermissionsUncheckedCreateWithoutPermissionInput>
  }

  export type Roles_PermissionsCreateManyPermissionInputEnvelope = {
    data: Roles_PermissionsCreateManyPermissionInput | Roles_PermissionsCreateManyPermissionInput[]
    skipDuplicates?: boolean
  }

  export type Roles_PermissionsUpsertWithWhereUniqueWithoutPermissionInput = {
    where: Roles_PermissionsWhereUniqueInput
    update: XOR<Roles_PermissionsUpdateWithoutPermissionInput, Roles_PermissionsUncheckedUpdateWithoutPermissionInput>
    create: XOR<Roles_PermissionsCreateWithoutPermissionInput, Roles_PermissionsUncheckedCreateWithoutPermissionInput>
  }

  export type Roles_PermissionsUpdateWithWhereUniqueWithoutPermissionInput = {
    where: Roles_PermissionsWhereUniqueInput
    data: XOR<Roles_PermissionsUpdateWithoutPermissionInput, Roles_PermissionsUncheckedUpdateWithoutPermissionInput>
  }

  export type Roles_PermissionsUpdateManyWithWhereWithoutPermissionInput = {
    where: Roles_PermissionsScalarWhereInput
    data: XOR<Roles_PermissionsUpdateManyMutationInput, Roles_PermissionsUncheckedUpdateManyWithoutPermissionInput>
  }

  export type RoleCreateWithoutRolesPermissionsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    users?: UserCreateNestedManyWithoutRoleInput
    usersRoles?: Users_RolesCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutRolesPermissionsInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutRolesPermissionsInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutRolesPermissionsInput, RoleUncheckedCreateWithoutRolesPermissionsInput>
  }

  export type PermissionsCreateWithoutRolesPermissionsInput = {
    id?: string
    code: string
    name: string
    module?: string | null
  }

  export type PermissionsUncheckedCreateWithoutRolesPermissionsInput = {
    id?: string
    code: string
    name: string
    module?: string | null
  }

  export type PermissionsCreateOrConnectWithoutRolesPermissionsInput = {
    where: PermissionsWhereUniqueInput
    create: XOR<PermissionsCreateWithoutRolesPermissionsInput, PermissionsUncheckedCreateWithoutRolesPermissionsInput>
  }

  export type RoleUpsertWithoutRolesPermissionsInput = {
    update: XOR<RoleUpdateWithoutRolesPermissionsInput, RoleUncheckedUpdateWithoutRolesPermissionsInput>
    create: XOR<RoleCreateWithoutRolesPermissionsInput, RoleUncheckedCreateWithoutRolesPermissionsInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutRolesPermissionsInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutRolesPermissionsInput, RoleUncheckedUpdateWithoutRolesPermissionsInput>
  }

  export type RoleUpdateWithoutRolesPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutRoleNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutRolesPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type PermissionsUpsertWithoutRolesPermissionsInput = {
    update: XOR<PermissionsUpdateWithoutRolesPermissionsInput, PermissionsUncheckedUpdateWithoutRolesPermissionsInput>
    create: XOR<PermissionsCreateWithoutRolesPermissionsInput, PermissionsUncheckedCreateWithoutRolesPermissionsInput>
    where?: PermissionsWhereInput
  }

  export type PermissionsUpdateToOneWithWhereWithoutRolesPermissionsInput = {
    where?: PermissionsWhereInput
    data: XOR<PermissionsUpdateWithoutRolesPermissionsInput, PermissionsUncheckedUpdateWithoutRolesPermissionsInput>
  }

  export type PermissionsUpdateWithoutRolesPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PermissionsUncheckedUpdateWithoutRolesPermissionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    module?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutUsersRolesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutUsersRolesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutUsersRolesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUsersRolesInput, UserUncheckedCreateWithoutUsersRolesInput>
  }

  export type RoleCreateWithoutUsersRolesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    users?: UserCreateNestedManyWithoutRoleInput
    rolesPermissions?: Roles_PermissionsCreateNestedManyWithoutRoleInput
  }

  export type RoleUncheckedCreateWithoutUsersRolesInput = {
    id?: string
    code: string
    name: string
    description?: string | null
    is_active?: boolean
    users?: UserUncheckedCreateNestedManyWithoutRoleInput
    rolesPermissions?: Roles_PermissionsUncheckedCreateNestedManyWithoutRoleInput
  }

  export type RoleCreateOrConnectWithoutUsersRolesInput = {
    where: RoleWhereUniqueInput
    create: XOR<RoleCreateWithoutUsersRolesInput, RoleUncheckedCreateWithoutUsersRolesInput>
  }

  export type UserUpsertWithoutUsersRolesInput = {
    update: XOR<UserUpdateWithoutUsersRolesInput, UserUncheckedUpdateWithoutUsersRolesInput>
    create: XOR<UserCreateWithoutUsersRolesInput, UserUncheckedCreateWithoutUsersRolesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUsersRolesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUsersRolesInput, UserUncheckedUpdateWithoutUsersRolesInput>
  }

  export type UserUpdateWithoutUsersRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutUsersRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type RoleUpsertWithoutUsersRolesInput = {
    update: XOR<RoleUpdateWithoutUsersRolesInput, RoleUncheckedUpdateWithoutUsersRolesInput>
    create: XOR<RoleCreateWithoutUsersRolesInput, RoleUncheckedCreateWithoutUsersRolesInput>
    where?: RoleWhereInput
  }

  export type RoleUpdateToOneWithWhereWithoutUsersRolesInput = {
    where?: RoleWhereInput
    data: XOR<RoleUpdateWithoutUsersRolesInput, RoleUncheckedUpdateWithoutUsersRolesInput>
  }

  export type RoleUpdateWithoutUsersRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUpdateManyWithoutRoleNestedInput
    rolesPermissions?: Roles_PermissionsUpdateManyWithoutRoleNestedInput
  }

  export type RoleUncheckedUpdateWithoutUsersRolesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    is_active?: BoolFieldUpdateOperationsInput | boolean
    users?: UserUncheckedUpdateManyWithoutRoleNestedInput
    rolesPermissions?: Roles_PermissionsUncheckedUpdateManyWithoutRoleNestedInput
  }

  export type UserCreateWithoutContractsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutContractsInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutContractsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
  }

  export type Contract_RenewalsCreateWithoutContractInput = {
    id?: string
    renewalDate: Date | string
    note?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type Contract_RenewalsUncheckedCreateWithoutContractInput = {
    id?: string
    renewalDate: Date | string
    note?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type Contract_RenewalsCreateOrConnectWithoutContractInput = {
    where: Contract_RenewalsWhereUniqueInput
    create: XOR<Contract_RenewalsCreateWithoutContractInput, Contract_RenewalsUncheckedCreateWithoutContractInput>
  }

  export type Contract_RenewalsCreateManyContractInputEnvelope = {
    data: Contract_RenewalsCreateManyContractInput | Contract_RenewalsCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type Customer_Care_NotesCreateWithoutContractInput = {
    id?: string
    content: string
    createdAt?: Date | string
    creator: UserCreateNestedOneWithoutCskhNotesInput
  }

  export type Customer_Care_NotesUncheckedCreateWithoutContractInput = {
    id?: string
    createdById: string
    content: string
    createdAt?: Date | string
  }

  export type Customer_Care_NotesCreateOrConnectWithoutContractInput = {
    where: Customer_Care_NotesWhereUniqueInput
    create: XOR<Customer_Care_NotesCreateWithoutContractInput, Customer_Care_NotesUncheckedCreateWithoutContractInput>
  }

  export type Customer_Care_NotesCreateManyContractInputEnvelope = {
    data: Customer_Care_NotesCreateManyContractInput | Customer_Care_NotesCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type FilesCreateWithoutContractInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    createdAt?: Date | string
    user?: UserCreateNestedOneWithoutFilesInput
  }

  export type FilesUncheckedCreateWithoutContractInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type FilesCreateOrConnectWithoutContractInput = {
    where: FilesWhereUniqueInput
    create: XOR<FilesCreateWithoutContractInput, FilesUncheckedCreateWithoutContractInput>
  }

  export type FilesCreateManyContractInputEnvelope = {
    data: FilesCreateManyContractInput | FilesCreateManyContractInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutContractsInput = {
    update: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
    create: XOR<UserCreateWithoutContractsInput, UserUncheckedCreateWithoutContractsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutContractsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutContractsInput, UserUncheckedUpdateWithoutContractsInput>
  }

  export type UserUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutContractsInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type Contract_RenewalsUpsertWithWhereUniqueWithoutContractInput = {
    where: Contract_RenewalsWhereUniqueInput
    update: XOR<Contract_RenewalsUpdateWithoutContractInput, Contract_RenewalsUncheckedUpdateWithoutContractInput>
    create: XOR<Contract_RenewalsCreateWithoutContractInput, Contract_RenewalsUncheckedCreateWithoutContractInput>
  }

  export type Contract_RenewalsUpdateWithWhereUniqueWithoutContractInput = {
    where: Contract_RenewalsWhereUniqueInput
    data: XOR<Contract_RenewalsUpdateWithoutContractInput, Contract_RenewalsUncheckedUpdateWithoutContractInput>
  }

  export type Contract_RenewalsUpdateManyWithWhereWithoutContractInput = {
    where: Contract_RenewalsScalarWhereInput
    data: XOR<Contract_RenewalsUpdateManyMutationInput, Contract_RenewalsUncheckedUpdateManyWithoutContractInput>
  }

  export type Contract_RenewalsScalarWhereInput = {
    AND?: Contract_RenewalsScalarWhereInput | Contract_RenewalsScalarWhereInput[]
    OR?: Contract_RenewalsScalarWhereInput[]
    NOT?: Contract_RenewalsScalarWhereInput | Contract_RenewalsScalarWhereInput[]
    id?: StringFilter<"Contract_Renewals"> | string
    contractId?: StringFilter<"Contract_Renewals"> | string
    renewalDate?: DateTimeFilter<"Contract_Renewals"> | Date | string
    note?: StringNullableFilter<"Contract_Renewals"> | string | null
    processedBy?: StringNullableFilter<"Contract_Renewals"> | string | null
    createdAt?: DateTimeFilter<"Contract_Renewals"> | Date | string
  }

  export type Customer_Care_NotesUpsertWithWhereUniqueWithoutContractInput = {
    where: Customer_Care_NotesWhereUniqueInput
    update: XOR<Customer_Care_NotesUpdateWithoutContractInput, Customer_Care_NotesUncheckedUpdateWithoutContractInput>
    create: XOR<Customer_Care_NotesCreateWithoutContractInput, Customer_Care_NotesUncheckedCreateWithoutContractInput>
  }

  export type Customer_Care_NotesUpdateWithWhereUniqueWithoutContractInput = {
    where: Customer_Care_NotesWhereUniqueInput
    data: XOR<Customer_Care_NotesUpdateWithoutContractInput, Customer_Care_NotesUncheckedUpdateWithoutContractInput>
  }

  export type Customer_Care_NotesUpdateManyWithWhereWithoutContractInput = {
    where: Customer_Care_NotesScalarWhereInput
    data: XOR<Customer_Care_NotesUpdateManyMutationInput, Customer_Care_NotesUncheckedUpdateManyWithoutContractInput>
  }

  export type FilesUpsertWithWhereUniqueWithoutContractInput = {
    where: FilesWhereUniqueInput
    update: XOR<FilesUpdateWithoutContractInput, FilesUncheckedUpdateWithoutContractInput>
    create: XOR<FilesCreateWithoutContractInput, FilesUncheckedCreateWithoutContractInput>
  }

  export type FilesUpdateWithWhereUniqueWithoutContractInput = {
    where: FilesWhereUniqueInput
    data: XOR<FilesUpdateWithoutContractInput, FilesUncheckedUpdateWithoutContractInput>
  }

  export type FilesUpdateManyWithWhereWithoutContractInput = {
    where: FilesScalarWhereInput
    data: XOR<FilesUpdateManyMutationInput, FilesUncheckedUpdateManyWithoutContractInput>
  }

  export type UserCreateWithoutImportHistoriesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutCreatorInput
  }

  export type UserUncheckedCreateWithoutImportHistoriesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutCreatorInput
  }

  export type UserCreateOrConnectWithoutImportHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutImportHistoriesInput, UserUncheckedCreateWithoutImportHistoriesInput>
  }

  export type UserUpsertWithoutImportHistoriesInput = {
    update: XOR<UserUpdateWithoutImportHistoriesInput, UserUncheckedUpdateWithoutImportHistoriesInput>
    create: XOR<UserCreateWithoutImportHistoriesInput, UserUncheckedCreateWithoutImportHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutImportHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutImportHistoriesInput, UserUncheckedUpdateWithoutImportHistoriesInput>
  }

  export type UserUpdateWithoutImportHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutImportHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type ContractsCreateWithoutCskhNotesInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContractsInput
    renewals?: Contract_RenewalsCreateNestedManyWithoutContractInput
    files?: FilesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutCskhNotesInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    renewals?: Contract_RenewalsUncheckedCreateNestedManyWithoutContractInput
    files?: FilesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutCskhNotesInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutCskhNotesInput, ContractsUncheckedCreateWithoutCskhNotesInput>
  }

  export type UserCreateWithoutCskhNotesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    region?: RegionCreateNestedOneWithoutUsersInput
    seniorDeptManager?: UserCreateNestedOneWithoutSeniorDeptSubsInput
    seniorDeptSubs?: UserCreateNestedManyWithoutSeniorDeptManagerInput
    deptManager?: UserCreateNestedOneWithoutDeptSubsInput
    deptSubs?: UserCreateNestedManyWithoutDeptManagerInput
    manager?: UserCreateNestedOneWithoutDirectSubsInput
    directSubs?: UserCreateNestedManyWithoutManagerInput
    role: RoleCreateNestedOneWithoutUsersInput
    contracts?: ContractsCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsCreateNestedManyWithoutUserInput
    files?: FilesCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryCreateNestedManyWithoutUploaderInput
  }

  export type UserUncheckedCreateWithoutCskhNotesInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
    seniorDeptSubs?: UserUncheckedCreateNestedManyWithoutSeniorDeptManagerInput
    deptSubs?: UserUncheckedCreateNestedManyWithoutDeptManagerInput
    directSubs?: UserUncheckedCreateNestedManyWithoutManagerInput
    contracts?: ContractsUncheckedCreateNestedManyWithoutCreatorInput
    auditLogs?: Audit_LogsUncheckedCreateNestedManyWithoutUserInput
    files?: FilesUncheckedCreateNestedManyWithoutUserInput
    usersRoles?: Users_RolesUncheckedCreateNestedManyWithoutUserInput
    importHistories?: Import_HistoryUncheckedCreateNestedManyWithoutUploaderInput
  }

  export type UserCreateOrConnectWithoutCskhNotesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCskhNotesInput, UserUncheckedCreateWithoutCskhNotesInput>
  }

  export type ContractsUpsertWithoutCskhNotesInput = {
    update: XOR<ContractsUpdateWithoutCskhNotesInput, ContractsUncheckedUpdateWithoutCskhNotesInput>
    create: XOR<ContractsCreateWithoutCskhNotesInput, ContractsUncheckedCreateWithoutCskhNotesInput>
    where?: ContractsWhereInput
  }

  export type ContractsUpdateToOneWithWhereWithoutCskhNotesInput = {
    where?: ContractsWhereInput
    data: XOR<ContractsUpdateWithoutCskhNotesInput, ContractsUncheckedUpdateWithoutCskhNotesInput>
  }

  export type ContractsUpdateWithoutCskhNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContractsNestedInput
    renewals?: Contract_RenewalsUpdateManyWithoutContractNestedInput
    files?: FilesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutCskhNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: Contract_RenewalsUncheckedUpdateManyWithoutContractNestedInput
    files?: FilesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type UserUpsertWithoutCskhNotesInput = {
    update: XOR<UserUpdateWithoutCskhNotesInput, UserUncheckedUpdateWithoutCskhNotesInput>
    create: XOR<UserCreateWithoutCskhNotesInput, UserUncheckedCreateWithoutCskhNotesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCskhNotesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCskhNotesInput, UserUncheckedUpdateWithoutCskhNotesInput>
  }

  export type UserUpdateWithoutCskhNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
  }

  export type UserUncheckedUpdateWithoutCskhNotesInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
  }

  export type ContractsCreateWithoutRenewalsInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    creator: UserCreateNestedOneWithoutContractsInput
    cskhNotes?: Customer_Care_NotesCreateNestedManyWithoutContractInput
    files?: FilesCreateNestedManyWithoutContractInput
  }

  export type ContractsUncheckedCreateWithoutRenewalsInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdById: string
    createdAt?: Date | string
    updatedAt?: Date | string
    cskhNotes?: Customer_Care_NotesUncheckedCreateNestedManyWithoutContractInput
    files?: FilesUncheckedCreateNestedManyWithoutContractInput
  }

  export type ContractsCreateOrConnectWithoutRenewalsInput = {
    where: ContractsWhereUniqueInput
    create: XOR<ContractsCreateWithoutRenewalsInput, ContractsUncheckedCreateWithoutRenewalsInput>
  }

  export type ContractsUpsertWithoutRenewalsInput = {
    update: XOR<ContractsUpdateWithoutRenewalsInput, ContractsUncheckedUpdateWithoutRenewalsInput>
    create: XOR<ContractsCreateWithoutRenewalsInput, ContractsUncheckedCreateWithoutRenewalsInput>
    where?: ContractsWhereInput
  }

  export type ContractsUpdateToOneWithWhereWithoutRenewalsInput = {
    where?: ContractsWhereInput
    data: XOR<ContractsUpdateWithoutRenewalsInput, ContractsUncheckedUpdateWithoutRenewalsInput>
  }

  export type ContractsUpdateWithoutRenewalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutContractsNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutContractNestedInput
    files?: FilesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutRenewalsInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdById?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutContractNestedInput
    files?: FilesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type UserCreateManyRoleInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Roles_PermissionsCreateManyRoleInput = {
    permissionId: string
  }

  export type Users_RolesCreateManyRoleInput = {
    userId: string
  }

  export type UserUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRoleInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Roles_PermissionsUpdateWithoutRoleInput = {
    permission?: PermissionsUpdateOneRequiredWithoutRolesPermissionsNestedInput
  }

  export type Roles_PermissionsUncheckedUpdateWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type Roles_PermissionsUncheckedUpdateManyWithoutRoleInput = {
    permissionId?: StringFieldUpdateOperationsInput | string
  }

  export type Users_RolesUpdateWithoutRoleInput = {
    user?: UserUpdateOneRequiredWithoutUsersRolesNestedInput
  }

  export type Users_RolesUncheckedUpdateWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type Users_RolesUncheckedUpdateManyWithoutRoleInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateManySeniorDeptManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyDeptManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateManyManagerInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    regionCode?: string | null
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ContractsCreateManyCreatorInput = {
    id?: string
    contractCode: string
    title: string
    type: string
    status?: string
    totalAmount?: Decimal | DecimalJsLike | number | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type Audit_LogsCreateManyUserInput = {
    id?: string
    action: string
    tableName: string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type FilesCreateManyUserInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    contractId?: string | null
    createdAt?: Date | string
  }

  export type Users_RolesCreateManyUserInput = {
    roleId: string
  }

  export type Import_HistoryCreateManyUploaderInput = {
    id?: string
    fileName: string
    module: string
    totalRows?: number
    successRows?: number
    failedRows?: number
    status: string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type Customer_Care_NotesCreateManyCreatorInput = {
    id?: string
    contractId: string
    content: string
    createdAt?: Date | string
  }

  export type UserUpdateWithoutSeniorDeptManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutSeniorDeptManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutSeniorDeptManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutDeptManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutDeptManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDeptManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    region?: RegionUpdateOneWithoutUsersNestedInput
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutManagerInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    regionCode?: NullableStringFieldUpdateOperationsInput | string | null
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ContractsUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: Contract_RenewalsUpdateManyWithoutContractNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutContractNestedInput
    files?: FilesUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    renewals?: Contract_RenewalsUncheckedUpdateManyWithoutContractNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutContractNestedInput
    files?: FilesUncheckedUpdateManyWithoutContractNestedInput
  }

  export type ContractsUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractCode?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    totalAmount?: NullableDecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogsUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogsUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Audit_LogsUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    action?: StringFieldUpdateOperationsInput | string
    tableName?: StringFieldUpdateOperationsInput | string
    oldData?: NullableJsonNullValueInput | InputJsonValue
    newValue?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractsUpdateOneWithoutFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    contractId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Users_RolesUpdateWithoutUserInput = {
    role?: RoleUpdateOneRequiredWithoutUsersRolesNestedInput
  }

  export type Users_RolesUncheckedUpdateWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type Users_RolesUncheckedUpdateManyWithoutUserInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type Import_HistoryUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Import_HistoryUncheckedUpdateWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Import_HistoryUncheckedUpdateManyWithoutUploaderInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    module?: StringFieldUpdateOperationsInput | string
    totalRows?: IntFieldUpdateOperationsInput | number
    successRows?: IntFieldUpdateOperationsInput | number
    failedRows?: IntFieldUpdateOperationsInput | number
    status?: StringFieldUpdateOperationsInput | string
    errorLog?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    contract?: ContractsUpdateOneRequiredWithoutCskhNotesNestedInput
  }

  export type Customer_Care_NotesUncheckedUpdateWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesUncheckedUpdateManyWithoutCreatorInput = {
    id?: StringFieldUpdateOperationsInput | string
    contractId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyRegionInput = {
    id?: string
    employeeCode?: string | null
    fullName: string
    password: string
    email?: string | null
    gender?: string | null
    dob?: Date | string | null
    address?: string | null
    account_type?: string
    phone?: string | null
    joinDate?: Date | string | null
    leaveDate?: Date | string | null
    isActive?: boolean
    seniorDeptManagerId?: string | null
    deptManagerId?: string | null
    managerId?: string | null
    roleId: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptManager?: UserUpdateOneWithoutSeniorDeptSubsNestedInput
    seniorDeptSubs?: UserUpdateManyWithoutSeniorDeptManagerNestedInput
    deptManager?: UserUpdateOneWithoutDeptSubsNestedInput
    deptSubs?: UserUpdateManyWithoutDeptManagerNestedInput
    manager?: UserUpdateOneWithoutDirectSubsNestedInput
    directSubs?: UserUpdateManyWithoutManagerNestedInput
    role?: RoleUpdateOneRequiredWithoutUsersNestedInput
    contracts?: ContractsUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUpdateManyWithoutUserNestedInput
    files?: FilesUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seniorDeptSubs?: UserUncheckedUpdateManyWithoutSeniorDeptManagerNestedInput
    deptSubs?: UserUncheckedUpdateManyWithoutDeptManagerNestedInput
    directSubs?: UserUncheckedUpdateManyWithoutManagerNestedInput
    contracts?: ContractsUncheckedUpdateManyWithoutCreatorNestedInput
    auditLogs?: Audit_LogsUncheckedUpdateManyWithoutUserNestedInput
    files?: FilesUncheckedUpdateManyWithoutUserNestedInput
    usersRoles?: Users_RolesUncheckedUpdateManyWithoutUserNestedInput
    importHistories?: Import_HistoryUncheckedUpdateManyWithoutUploaderNestedInput
    cskhNotes?: Customer_Care_NotesUncheckedUpdateManyWithoutCreatorNestedInput
  }

  export type UserUncheckedUpdateManyWithoutRegionInput = {
    id?: StringFieldUpdateOperationsInput | string
    employeeCode?: NullableStringFieldUpdateOperationsInput | string | null
    fullName?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    dob?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    address?: NullableStringFieldUpdateOperationsInput | string | null
    account_type?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    joinDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    leaveDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    seniorDeptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    deptManagerId?: NullableStringFieldUpdateOperationsInput | string | null
    managerId?: NullableStringFieldUpdateOperationsInput | string | null
    roleId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Roles_PermissionsCreateManyPermissionInput = {
    roleId: string
  }

  export type Roles_PermissionsUpdateWithoutPermissionInput = {
    role?: RoleUpdateOneRequiredWithoutRolesPermissionsNestedInput
  }

  export type Roles_PermissionsUncheckedUpdateWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type Roles_PermissionsUncheckedUpdateManyWithoutPermissionInput = {
    roleId?: StringFieldUpdateOperationsInput | string
  }

  export type Contract_RenewalsCreateManyContractInput = {
    id?: string
    renewalDate: Date | string
    note?: string | null
    processedBy?: string | null
    createdAt?: Date | string
  }

  export type Customer_Care_NotesCreateManyContractInput = {
    id?: string
    createdById: string
    content: string
    createdAt?: Date | string
  }

  export type FilesCreateManyContractInput = {
    id?: string
    fileName: string
    filePath: string
    fileType: string
    category: string
    userId?: string | null
    createdAt?: Date | string
  }

  export type Contract_RenewalsUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_RenewalsUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Contract_RenewalsUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    renewalDate?: DateTimeFieldUpdateOperationsInput | Date | string
    note?: NullableStringFieldUpdateOperationsInput | string | null
    processedBy?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    creator?: UserUpdateOneRequiredWithoutCskhNotesNestedInput
  }

  export type Customer_Care_NotesUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Customer_Care_NotesUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdById?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneWithoutFilesNestedInput
  }

  export type FilesUncheckedUpdateWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FilesUncheckedUpdateManyWithoutContractInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    filePath?: StringFieldUpdateOperationsInput | string
    fileType?: StringFieldUpdateOperationsInput | string
    category?: StringFieldUpdateOperationsInput | string
    userId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}