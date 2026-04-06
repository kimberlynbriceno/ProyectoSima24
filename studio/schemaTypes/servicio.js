export default {
  name: 'servicio',
  type: 'document',
  title: 'Servicios de Salud',
  fields: [
    {
      name: 'nombre',
      type: 'string',
      title: 'Nombre del Servicio',
      validation: Rule => Rule.required()
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug (URL)',
      options: {
        source: 'nombre',
        maxLength: 96
      }
    },
    {
      name: 'categoria',
      type: 'string',
      title: 'Categoría',
      options: {
        list: [
          { title: 'Traslados', value: 'traslados' },
          { title: 'Emergencias', value: 'emergencias' },
          { title: 'Atención Domiciliaria', value: 'domiciliaria' },
          { title: 'Cobertura Regional', value: 'cobertura' },
          { title: 'Otros', value: 'otros' }
        ]
      }
    },
    {
      name: 'icono',
      type: 'string',
      title: 'Nombre del Icono',
      description: 'Nombre del icono de Lucide (ej: plane, ambulance, home, heart-pulse, etc.)',
      validation: Rule => Rule.max(50)
    },
    {
      name: 'descripcion',
      type: 'text',
      title: 'Descripción',
      validation: Rule => Rule.max(300).warning('La descripción debería ser breve para las tarjetas')
    },
    {
      name: 'imagen',
      type: 'image',
      title: 'Imagen',
      options: { hotspot: true }
    },
    {
      name: 'activo',
      type: 'boolean',
      title: 'Activo',
      description: 'Mostrar este servicio en el sitio web',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'nombre',
      subtitle: 'categoria',
      media: 'imagen'
    }
  }
}