import React, {useState} from "react";
import { COLORS,  SIZES } from "../../constants";
import { View, Text, StyleSheet, Dimensions, Modal, Image} from "react-native";
import { AntDesign } from '@expo/vector-icons'; 


var deviceWidth = Dimensions.get("window").width;
var deviceHeight = Dimensions.get("window").height;


export default function NutritionGain () {

    const [FirstDay, SetFirstDay] = useState(false);
    const [SecondDay, SetSecondDay] = useState(false);
    const [ThirdDay, SetThirdDay] = useState(false);
    const [FourDay, SetFourDay] = useState(false);
    const [FiveDay, SetFiveDay] = useState(false);
    const [SixDay, SetSixDay] = useState(false);
    const [SevenDay, SetSevenDay] = useState(false);

    

    return (
       
        <View style={Styles.Main}>
     
           <Modal visible={FirstDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetFirstDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                         <View>
                         <Image source={{uri: 'https://www.gdp3podolsk.ru/blog/wp-content/uploads/2022/03/dieta-dlya-nabora-b43645f.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Овсянка 200г{"\n"} Белки: 10 {"\n"} Жиры: 6{"\n"}  Углеводы: 70  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                        <View>
                        <Image source={{uri: 'https://i.ytimg.com/vi/iB2Ct547TtQ/maxresdefault.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Рис с курицей 200г{"\n"} Белки: 10 {"\n"} Жиры: 2{"\n"}  Углеводы: 15  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                     <View>
                         <Image source={{uri: 'https://www.yournutrition.ru/images/recipes/5241/photo510.jpg'}}  style={Styles.Img}/>
                     </View>

                     <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Форель запечённая 300г{"\n"} Белки: 60{"\n"} Жиры: 15{"\n"}  Углеводы: 3  </Text>
                     </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> ПОНЕДЕЛЬНИК </Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetFirstDay(true)}/>
             </View>
           </View>
     
           <Modal visible={SecondDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetSecondDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                         <View>
                         <Image source={{uri: 'https://www.gdp3podolsk.ru/blog/wp-content/uploads/2022/03/dieta-dlya-nabora-b550a43.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Гречневая каша 200г{"\n"} Белки: 4 {"\n"} Жиры: 2{"\n"}  Углеводы: 17  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                        <View>
                        <Image source={{uri: 'https://nakormi.com/wp-content/uploads/2015/07/pshennaya-kasha-so-svininoj-600x400.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Пшено с индейкой 200г{"\n"} Белки: 16 {"\n"} Жиры: 3{"\n"}  Углеводы: 22  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                        <View>
                        <Image source={{uri: 'https://www.maggi.ru/data/images/recept/img640x500/recept_7604_0syr.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Стручковая фасоль 200г{"\n"} Белки: 3 {"\n"} Жиры: 0.3 {"\n"}  Углеводы: 5 </Text>
                        </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> ВТОРНИК </Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetSecondDay(true)}/>
             </View>
           </View>
     
           <Modal visible={ThirdDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetThirdDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                         <View>
                         <Image source={{uri: 'https://dom-eda.com/uploads/topics/preview/00/00/44/04/1eaaff71be_1000.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Кукурузная каша 200г{"\n"} Белки: 4 {"\n"} Жиры: 0.4{"\n"}  Углеводы: 20  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                        <View>
                        <Image source={{uri: 'https://img.iamcook.ru/2020/upl/recipes/zen/u-e18c36eb67a9c2622df7e747cb36315f.JPG'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Перловка с гуляшом 200г{"\n"} Белки: 6 {"\n"} Жиры: 4{"\n"}  Углеводы: 12  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                        <View>
                        <Image source={{uri: 'https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/2982.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Овощи с курицей 200г{"\n"} Белки: 12 {"\n"} Жиры: 3{"\n"}  Углеводы: 2  </Text>
                        </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> СРЕДА </Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetThirdDay(true)}/>
             </View>
           </View>
     
           <Modal visible={FourDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetFourDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                        <View>
                         <Image source={{uri: 'https://www.gdp3podolsk.ru/blog/wp-content/uploads/2022/03/dieta-dlya-nabora-b550a43.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Гречневая каша 200г{"\n"} Белки: 4 {"\n"} Жиры: 2{"\n"}  Углеводы: 17  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    <View>
                        <Image source={{uri: 'https://i.ytimg.com/vi/iB2Ct547TtQ/maxresdefault.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Рис с курицей 200г{"\n"} Белки: 10 {"\n"} Жиры: 2{"\n"}  Углеводы: 15  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    <View>
                         <Image source={{uri: 'https://www.yournutrition.ru/images/recipes/5241/photo510.jpg'}}  style={Styles.Img}/>
                     </View>

                     <View style={Styles.MealDis}>
                       <Text style={Styles.MealTxt}> Форель запечённая 300г{"\n"} Белки: 60{"\n"} Жиры: 15{"\n"}  Углеводы: 3  </Text>
                     </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> ЧЕТВЕРГ</Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetFourDay(true)}/>
             </View>
           </View>
     
           <Modal visible={FiveDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetFiveDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                     <View>
                         <Image source={{uri: 'https://www.gdp3podolsk.ru/blog/wp-content/uploads/2022/03/dieta-dlya-nabora-b43645f.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Овсянка 200г{"\n"} Белки: 10 {"\n"} Жиры: 6{"\n"}  Углеводы: 70  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    <View>
                        <Image source={{uri: 'https://i.ytimg.com/vi/iB2Ct547TtQ/maxresdefault.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Рис с курицей 200г{"\n"} Белки: 10 {"\n"} Жиры: 2{"\n"}  Углеводы: 15  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    
     
                        <View>
                        <Image source={{uri: 'https://nakormi.com/wp-content/uploads/2015/07/pshennaya-kasha-so-svininoj-600x400.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Пшено с индейкой 200г{"\n"} Белки: 16 {"\n"} Жиры: 3{"\n"}  Углеводы: 22  </Text>
                        </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> ПЯТНИЦА </Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetFiveDay(true)}/>
             </View>
           </View>
     
           <Modal visible={SixDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetSixDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                         <View>
                         <Image source={{uri: 'https://img.povar.ru/main/0e/98/06/7f/omlet_kusochkami-224433.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Омлет 200г{"\n"} Белки: 24 {"\n"} Жиры: 1.2{"\n"}  Углеводы: 22  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    <View>
                        <Image source={{uri: 'https://img.iamcook.ru/2020/upl/recipes/zen/u-e18c36eb67a9c2622df7e747cb36315f.JPG'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Перловка с гуляшом 200г{"\n"} Белки: 6 {"\n"} Жиры: 4{"\n"}  Углеводы: 12  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                       
                    <View>
                        <Image source={{uri: 'https://calorizator.ru/sites/default/files/imagecache/recipes_full/recipe/2982.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Овощи с курицей 200г{"\n"} Белки: 12 {"\n"} Жиры: 3{"\n"}  Углеводы: 2  </Text>
                        </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> СУББОТА </Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetSixDay(true)}/>
             </View>
           </View>
     
           <Modal visible={SevenDay}>
             <View style={Styles.FullDay}>
     
                 <AntDesign name="caretup" size={30} color="black" style={Styles.Caret} onPress={ () => SetSevenDay(false)} />
                 <View style={Styles.Meal}>
     
                     <View>
                    
                     <Text style={Styles.MealTxt}> ЗАВТРАК </Text> 
                    
                     </View>   
     
                     <View style={Styles.DayNot}>
                     
                     <View>
                         <Image source={{uri: 'https://dom-eda.com/uploads/topics/preview/00/00/44/04/1eaaff71be_1000.jpg'}}  style={Styles.Img}/>
                         </View>
     
                         <View style={Styles.MealDis}>
                             <Text style={Styles.MealTxt}> Кукурузная каша 200г{"\n"} Белки: 4 {"\n"} Жиры: 0.4{"\n"}  Углеводы: 20  </Text>
                         </View>
                     </View>  
                 
                 </View>
     
                 <View style={Styles.Meal}>
                
                 <View>
                    
                    <Text style={Styles.MealTxt}> ОБЕД </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    <View>
                        <Image source={{uri: 'https://i.ytimg.com/vi/iB2Ct547TtQ/maxresdefault.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Рис с курицей 200г{"\n"} Белки: 10 {"\n"} Жиры: 2{"\n"}  Углеводы: 15  </Text>
                        </View>
                    </View>  
     
                 </View>
     
                 <View style={Styles.Meal}>
     
                 <View>
                    
                    <Text style={Styles.MealTxt}> УЖИН </Text> 
                   
                    </View>   
     
                    <View style={Styles.DayNot}>
                    
                    <View>
                        <Image source={{uri: 'https://nakormi.com/wp-content/uploads/2015/07/pshennaya-kasha-so-svininoj-600x400.jpg'}}  style={Styles.Img}/>
                        </View>
     
                        <View style={Styles.MealDis}>
                            <Text style={Styles.MealTxt}> Пшено с индейкой 200г{"\n"} Белки: 16 {"\n"} Жиры: 3{"\n"}  Углеводы: 22  </Text>
                        </View>
                    </View>  
     
                 </View>
     
             </View>
           </Modal>
     
           <View style={Styles.Day}> 
             <View style={Styles.DayEl}> 
                 <Text style = {Styles.Txt}> ВОСКРЕСЕНЬЕ </Text>
                 <AntDesign name="caretdown" size={24} color="black" onPress={ () => SetSevenDay(true)}/>
             </View>
           </View>
         </View>
        )
}

const Styles = StyleSheet.create 
(
   {

      Main:
         {
            flexDirection: "column",
            justifyContent:"center", 
            backgroundColor: COLORS.black,
            width : deviceWidth * 100 / 100,
            height: deviceHeight * 90 / 100,
         },
         Day:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 8 / 100, 
            backgroundColor: COLORS.white,
            borderRadius: 8/2,
            marginLeft: deviceWidth * 5 / 100,
            marginBottom: deviceWidth * 6 / 100,
         },
         DayEl:
         {
            flexDirection: "row",
            justifyContent:"space-between",
           

         },
         Txt:
         {
            textAlign: "center", 
            fontSize: SIZES.h2,
            paddingTop: '1%',
            color: COLORS.black,
         },
         Caret:
         {
            marginLeft: '3%',
            marginTop: '3%'
         },
         FullDay:
         {
            flexDirection: "column",
            justifyContent:"center",
         },
         Meal:
         {
            width : deviceWidth * 90 / 100,
            height: deviceHeight * 24 / 100,
            backgroundColor: COLORS.black,
            margin: '5%',
            borderRadius: 10/2,
         },
         DayNot:
         {
            flexDirection: "row",
            justifyContent:"space-between",
            margin: '10%',
           

         },
         MealTxt:
         {
            textAlign: "center",
            color: COLORS.white,
         },
         Img:
         {
            width : deviceWidth * 25 / 100,
            height: deviceHeight * 15 / 100,
         },
         
   }
)

