import { useState } from 'react';
import orderCoverimg from '../../../assets/shop/banner2.jpg'
import Cover from '../../Shared/Cover';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseMenu';
import OrderTab from '../OrderTab';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {
     const categories = ['salad', 'pizza', 'soup', 'desserts', 'drinks', 'popular', 'offered'];
     const {category} = useParams();
     const initialIndex = categories.indexOf(category)
     const [tabIndex, setTabIndex] = useState(initialIndex);
     const [,menu, ,] = useMenu();
     
     
     const desserts = menu.filter(item => item.category === 'dessert')
     const soup = menu.filter(item => item.category === 'soup')
     const salad = menu.filter(item => item.category === 'salad')
     const pizza = menu.filter(item => item.category === 'pizza')
     const drinks = menu.filter(item => item.category === 'drinks')
     const popular = menu.filter(item => item.category === 'popular')
     const offered = menu.filter(item => item.category === 'offered')


     return (
          <div>
               <Helmet>
                    <title>Bistro Boss | Order</title>
               </Helmet>
               <Cover title={"Order Food"} img={orderCoverimg}></Cover>

               <div className="container mx-auto py-10  px-4">
                    <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                         <TabList className="text-center   space-x-5">
                              <Tab>Salad</Tab>
                              <Tab>Pizza</Tab>
                              <Tab>Soups</Tab>
                              <Tab>Desserts</Tab>
                              <Tab>Drinks</Tab>
                              <Tab>Popular</Tab>
                              <Tab>Offered</Tab>
                         </TabList>

                         <TabPanel>
                              <OrderTab items={salad}></OrderTab>
                         </TabPanel>
                         <TabPanel>
                              <OrderTab items={pizza}></OrderTab>
                         </TabPanel>
                         <TabPanel>
                              <OrderTab items={soup}></OrderTab>
                         </TabPanel>
                         <TabPanel>
                              <OrderTab items={desserts}></OrderTab>
                         </TabPanel>
                         <TabPanel>
                              <OrderTab items={drinks}></OrderTab>
                         </TabPanel>
                         <TabPanel>
                              <OrderTab items={popular}></OrderTab>
                         </TabPanel>
                         <TabPanel>
                              <OrderTab items={offered}></OrderTab>
                         </TabPanel>
                    </Tabs>
               </div>

          </div>
     );
};

export default Order;