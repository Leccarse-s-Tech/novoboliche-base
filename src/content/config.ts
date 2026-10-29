import { defineCollection, z } from 'astro:content';

const pricingCollection = defineCollection({
  type: 'data',
  schema: z.object({
    id: z.string(),
    dia: z.string(),
    funcionamento: z.string(),
    turnos: z.array(
      z.object({
        periodo: z.string(),
        valor: z.number(),
        destaque: z.boolean(),
      })
    ),
    mensagemWhats: z.string(),
  }),
});

export const collections = {
  pricing: pricingCollection,
};
