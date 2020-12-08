const toString = Object.prototype.toString

export function isDate(val: any): val is Date {
  return toString.call(val) === '[object Date]'
}

// export function isObject (val: any): val is Object {
//   return val !== null && typeof val === 'object'
// }

export function isPlainObject(val: any): val is Object {
  return toString.call(val) === '[object Object]'
}

export function isFormData(val: any): val is FormData {
  return typeof val !== 'undefined' && val instanceof FormData
}

export function isURLSearchParams(val: any): val is URLSearchParams {
  return typeof val !== 'undefined' && val instanceof URLSearchParams
}

export function extend<T, U>(to: T, from: U): T & U {
  for (const key in from) {
    ;(to as T & U)[key] = from[key] as any
  }
  return to as T & U
}

export function deepMerge(...objs: any[]): any {
  const result = Object.create(null)

  objs.forEach(obj => {
    if (obj) {
      Object.keys(obj).forEach(key => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}

// 根据字段合并行
// 目前仅支持输入一个key值合并，有多个key则需要配合修改生成多个rowSpan的约定命名再加上轮询
export const setDataSourceRowSpan = (data: any[], key: string) => {
  if (!data) return []
  return data
    .reduce((result: any[], item: any) => {
      // 首先将name字段作为新数组result取出
      if (result.indexOf(item[key]) < 0) {
        result.push(item[key])
      }
      return result
    }, [])
    .reduce((result: any[], name: any) => {
      // 将name相同的数据作为新数组取出，并在其内部添加新字段**rowSpan**
      const children = data.filter((item: any) => item[key] === name)
      result = result.concat(
        ...children.map((item: any, index: number) => ({
          ...item,
          // 适配多列合并需要根据key设置该props
          rowSpan: !item[key] ? 1 : index === 0 ? children.length : 0 // 将第一行数据添加rowSpan字段
        }))
      )
      return result
    }, [])
}
