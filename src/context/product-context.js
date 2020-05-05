import React from 'react'

const productContext = React.createContext({cartitems: [],
                                            itemDetails: [],
                                        items: [
                                            {
                                              id: 0,
                                              name: 'TC 2017 LS',
                                              description: 'VC FlexLight Jersey with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
                                              price: 34.95,
                                              count: 12,
                                              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ1t26Um5I48V5fOQ7VttiPomuoYsOpsTMoUZS14nb0XUEEZZnq&usqp=CAU',
                                            }, {
                                              id: 1,
                                              name: 'TC 2017 Shorts',
                                              description: 'VC FlexLight Shorts with spot sublimated Team Canada 2017 logo, from our Team Canada Collection.',
                                              price: 25.00,
                                              count: 7,
                                              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS58INXO_QLKcWHOu0wqPeNoQsQ8sgEjDNIpfIcSo4vQTGJfcwH&usqp=CAU'
                                            }, {
                                              id: 2,
                                              name: 'TC 2016 Red SS',
                                              description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
                                              price: 74.00,
                                              count: 11,
                                              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQRwx543GKZMif7opW-BpmSGrhnF48A2ol06DPzB3XQhCgZ6l_L&usqp=CAU',
                                            }, {
                                              id: 3,
                                              name: 'TC 2016 Dark SS',
                                              description: 'VC Ultimate\'s fully sublimated performance jersey, a replica of one of the two official dark jerseys of 2016 Team Canada teams! Sublimated jerseys are made with VC\'s FlexLight performance material – soft, lightweight and moisture wicking.',
                                              price: 35.99,
                                              count: 13,
                                              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTmCVIdHwwpevVU6kaqQKsYqt23dxTKdmnF4ZnFm5lejq8ob50e&usqp=CAU'
                                            }]
                                        })

export default productContext