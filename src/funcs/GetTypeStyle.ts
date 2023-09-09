let typeStyle: string

export function getTypeStyle (type: string) {
  switch (type) {
    case 'grass':
      typeStyle = "border border-green-800 rounded-xl bg-green-500 text-white px-1"
      return typeStyle
    default:
      typeStyle = ""
  }
}