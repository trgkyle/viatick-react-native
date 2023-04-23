export interface IproviderData {
  id: number;
  imagePath: any;
  name: string;
  price: number;
}
export const providerData = [
  {
    id: 1,
    imagePath: require('@assets/keppelElectric.png'),
    name: 'Keppel Electric pte Ltd',
    price: 0.34,
  },
  {
    id: 2,
    imagePath: require('@assets/sembcorp.png'),
    name: 'Sembcorp Power Pte Ltd',
    price: 0.34,
  },
  {
    id: 3,
    imagePath: require('@assets/tuasPower.png'),
    name: 'Tuas Power supply',
    price: 0.34,
  },
  {
    id: 4,
    imagePath: require('@assets/senoko.png'),
    name: 'Senoko Energy Supply Pte Ltd ',
    price: 0.34,
  },
  {
    id: 5,
    imagePath: require('@assets/serayaEnergy.png'),
    name: 'Seraya Energy Pte Ltd',
    price: 0.34,
  },
  {
    id: 6,
    imagePath: require('@assets/pacificLight.png'),
    name: 'PacificLight Energy Pte Ltd',
    price: 0.34,
  },
  {
    id: 7,
    imagePath: require('@assets/sunseap.png'),
    name: 'Sunseap Energy Pte Ltd',
    price: 0.34,
  },
  {
    id: 8,
    imagePath: require('@assets/unionPower.png'),
    name: 'Union Power Pte Ltd',
    price: 0.34,
  },
  {
    id: 9,
    imagePath: require('@assets/diamondElectric.png'),
    name: 'Diamond Electric Pte Ltd',
    price: 0.34,
  },
  {
    id: 10,
    imagePath: require('@assets/sunseap.png'),
    name: 'Sunseap Energy Pte Ltd',
    price: 0.34,
  },
  {
    id: 11,
    imagePath: require('@assets/unionPower.png'),
    name: 'Union Power Pte Ltd',
    price: 0.34,
  },
  {
    id: 12,
    imagePath: require('@assets/diamondElectric.png'),
    name: 'Diamond Electric Pte Ltd',
    price: 0.34,
  },
];

export type ISavingTipsItem = {
  id: string;
  icon: string;
  title: string;
  tip: string;
};

export const dataSavingTips: ISavingTipsItem[] = [
  {
    id: '1',
    icon: 'air-conditioner',
    title: 'Run your air-con for 1 hour and switch to a fan to cool a room',
    tip: 'Save about $386 a year',
  },
  {
    id: '2',
    icon: 'kettle-outline',
    title: "Switch off the water heater when hot water isn't needed",
    tip: 'Save about $124 a year',
  },
  {
    id: '3',
    icon: 'car-brake-alert',
    title: 'Cool down hot food before sotring in fridge',
    tip: '',
  },
  {
    id: '4',
    icon: 'fridge-outline',
    title: 'Cover foods in your fridge to avoid overworking the compressor',
    tip: '',
  },
];
