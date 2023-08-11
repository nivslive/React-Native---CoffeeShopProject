import { ScrollView } from "react-native";
import ItemList from "../components/itemList";

import Header from "../components/Header";
const TableListScreen = () => {
  return (<>
        <ScrollView className="p-[30px]">
          <Header/>
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