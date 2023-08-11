import { ScrollView } from "react-native";
import ItemList from "../components/itemList";

import Header from "../components/Header";
const TableListScreen = () => {
  return (<>
          <Header/>
        <ScrollView className="w-[100%] p-[30px]">
          <ItemList text="oi"/>
          <ItemList text="oi"/>
          <ItemList text="oi"/>
          <ItemList text="oi"/>
          <ItemList text="oi"/>
          <ItemList text="oi"/>
          <ItemList text="oi"/>
          <ItemList text="oi"/>
        </ScrollView>

        {/* <ItemList text="maizena" />  */}
  </>);
}


export default TableListScreen;