const menu = [
    { name: "Beef Burger", calorias: 70, price: 12.0,
    logoUri:"https://github.com/mariaphyllis/SENAC_PTI_Mobile/blob/main/beefBurger.png"},
    { name: "Pancake", calorias: 60, price: 11.0,
    logoUri:"https://github.com/mariaphyllis/SENAC_PTI_Mobile/blob/main/panquecaBerries.png"}];
    
    function Card({menu}) {
    return (
    <View style={styles.cardContainer}>
    <View>
    <Text>{menu.nome}</Text>
    <Text>{menu.calorias} calorias</Text>
    <Text>$ {menu.price}</Text>
    </View>
    <Image
    accessibilityLabel={'imagem de '+menu.name}
    source={{ uri: menu.logoUri }}
    style={styles.logo}
    />
    </View>
    );
    }
    
    function App() {
    return (
    
    <View>
    <Card menu={menu[0]}></Card>
    <Card menu={menu[1]}></Card>
    </View>
    );
    }
    export default App;
