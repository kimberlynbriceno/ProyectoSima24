export default {
  name: 'servicio',
  type: 'document',
  title: 'Servicios de Salud',
  fields: [
    {
      name: 'nombre',
      type: 'string',
      title: 'Nombre del Servicio'
    },
    {
      name: 'descripcion',
      type: 'text',
      title: 'Descripción'
    },
    {
      name: 'imagen',
      type: 'image',
      title: 'Imagen',
      options: { hotspot: true }
    }
  ]
}