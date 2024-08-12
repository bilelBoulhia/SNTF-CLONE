/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useColorMode } from '@chakra-ui/react';
import { useToast } from '@chakra-ui/react'
import {

    HStack,
    Card
} from '@chakra-ui/react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Text,
    Th,
    Td,
    VStack,
    Stack,
    TableCaption,
    TableContainer,
    CardBody,
    Flex,
    CardHeader,
    Heading,
    Divider
} from '@chakra-ui/react'
import React from 'react'
import {useState,useEffect } from 'react'
import GetTrainData from "@/Hooks/GetTrainData.jsx";

export  default function SechduleCard({depart,arrivage}){
    const { colorMode } = useColorMode();

    const toast = useToast();
    
    
    const [traindata,settraindata] = useState([])
    

   
       
       const FetchData = async ()=> {

        


          const data = await GetTrainData(depart, arrivage);
          
           settraindata(data) 

           

          

           
       }


    useEffect(() => {
        FetchData();

     
        
    }, []);

    
  
    
    

    return (

<>



    {traindata.length > 0 ? (
        traindata.map((train, index) => (
            <Card m={2} color='white' bgGradient='linear(to-l, #0B60B0,#0C356A)' mt={9} key={index}>
                
                
                <CardBody>
                    <TableContainer>
                        <Table variant="simple" size="md">
                            <TableCaption color='white' >{train.StatusTrain}</TableCaption>
                          
                            <Tbody>
                                <Tr>
                                    <Th color='white' rowSpan={3}>Depart</Th>
                                    <Td>Gare</Td>
                                    <Td>{train.DepartStation}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                                
                                
                                <Tr/>
                    
                           
                                <Tr>
                                    <Td>Heur</Td>
                                    <Td>{train.DepartTime}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                          
                                <Tr>
                                    <Th color='white'  rowSpan={2}>Arrivage</Th>
                                    <Td>Gare</Td>
                                    <Td>{train.ArrivageStation}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                   
                                <Tr>
                                    <Td>Heur</Td>
                                    <Td>{train.ArrivageTime}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                        
                                <Tr>
                                    <Th color='white' >Ligne</Th>
                                    <Td>{train.Linge}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                </Tr>
                  
                                <Tr>
                                    <Th color='white' >Numero</Th>
                                    <Td>{train.NumeroTrain}</Td>
                                    <Td></Td>
                                    <Td></Td>
                                    <Td></Td>
                                    
                                </Tr>
                            
                            </Tbody>
                        </Table>
                    </TableContainer>
                </CardBody>
            </Card>
        ))
    ) : (
        <Card bg='grey.300' mt={9}>
           
            <CardBody> aucun train disponible</CardBody>
            
        </Card>
    )}
    
</>
    )


}

