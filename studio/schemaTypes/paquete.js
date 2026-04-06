export default {
  name: 'paquete',
  type: 'document',
  title: 'Paquetes y Precios',
  fields: [
    {
      name: 'titulo',
      type: 'string',
      title: 'Título del Paquete',
      validation: Rule => Rule.required()
    },
    {
      name: 'subtitulo',
      type: 'string',
      title: 'Subtítulo',
      description: 'Descripción corta o eslogan del paquete'
    },
    {
      name: 'precio',
      type: 'number',
      title: 'Precio',
      description: 'Precio del paquete',
      validation: Rule => Rule.required().min(0)
    },
    {
      name: 'beneficios',
      type: 'array',
      title: 'Beneficios',
      description: 'Lista de beneficios incluidos en el paquete',
      of: [{ type: 'string' }]
    },
    {
      name: 'activo',
      type: 'boolean',
      title: 'Activo',
      initialValue: true
    }
  ],
  preview: {
    select: {
      title: 'titulo',
      subtitle: 'precio'
    },
    prepare(selection) {
      return {
        title: selection.title,
        subtitle: `$${selection.subtitle || 0}`
      };
    }
  }
}
