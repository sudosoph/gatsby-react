import { FaPepperHot as icon } from 'react-icons/fa';

export default {
  name: 'topping', // name on computer
  title: 'Toppings', // public-facing name
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Topping Name',
      type: 'string',
      description: 'What is the name of the topping?',
    },
    {
      name: 'carnivore',
      title: 'Carnivore',
      type: 'boolean',
      description: 'Is it carnivore-friendly?',
      options: {
        layout: 'checkbox',
      },
    },
  ],
  preview: {
    select: {
      name: 'name',
      carnivore: 'carnivore',
    },
    prepare: ({ name, carnivore }) => ({
      title: `${name} ${carnivore ? '🥩' : ''}`,
    }),
  },
};
