const menu = [
    { name: "Beef Burger", calorias: 70, preco: 12.0,
    logoUri:"https://beefburger.png"},
    { nome: "Pancake", calorias: 60, preco: 11.0,
    logoUri:"https://pancake.png"}];
    
    function Card({menu}) {
    return (
    <View style={styles.cardContainer}>
    <View>
    <Text>{menu.nome}</Text>
    <Text>{menu.calorias} calorias</Text>
    <Text>$ {menu.preco}</Text>
    </View>
    <Image
    accessibilityLabel={'imagem de '+menu.nome}
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
