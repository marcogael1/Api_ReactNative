import { StyleSheet, Dimensions } from "react-native";
const { width } = Dimensions.get('window');
const buttonWidth = (width - 40) / 4;

export const estilos = StyleSheet.create({
    container: {
        flex: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    container1: {
        flex: 10,
        backgroundColor: '#753c15',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    calculator: {
        alignItems: 'center',
        padding: 20
    },
    display: {
        width: '90%',
        minHeight: 70,
        fontSize: 30,
        backgroundColor: '#fff',
        borderColor: '#ccc',
        borderWidth: 2,
        borderRadius: 5,
        textAlign: 'right',
        padding: 10,
        paddingRight: 20,
        alignSelf: 'center',
    },

    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 9,
        width: buttonWidth - 10,
        height: buttonWidth - 10,
        backgroundColor: '#f0f0f0',
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: buttonWidth / 2,
    },
    specialButton: {
        backgroundColor: '#ff8c00',
        color: '#fff',
    },
    buttonText: {
        fontSize: 18,
        color: '#000',
    },
    productContainer: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    productTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
    },
    productPrice: {
        fontSize: 18,
        color: '#FF6347',
        marginVertical: 5,
    },
    productImage: {
        height: 200,
        width: 200,
        resizeMode: 'contain',
        marginVertical: 15,
    },
    productDescription: {
        fontSize: 16,
        textAlign: 'center',
        color: '#333',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    productRating: {
        fontSize: 16,
        fontWeight: '500',
        color: '#008000',
        marginVertical: 5,
    },
    loadingContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    loadingText: {
        fontSize: 18,
        color: '#555',
        marginTop: 10,
    },
    container1: {
        flex: 10,
        backgroundColor: '#6CEC53',
        justifyContent: 'center',
        alignItems: 'stretch'
    },
    encabezado: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#C7E1C2',

    },
    pie: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#C7E1C2',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    contenido1: {
        flex: 8,
        alignItems: 'stretch',
        padding: 20
    },
    texto: {
        color: "#EA5417",
        fontSize: 30
    }
})