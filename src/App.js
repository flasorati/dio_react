import React from 'react';
import {View, Image, StyleSheet, SafeAreaView, StatusBar, Text, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontGithub = '#C9D1D9';
const colorDarkFontGithub = '#4F565E';
const imageProfileGithub = 'https://avatars.githubusercontent.com/u/101811312?v=4';
const urlToMyGithub = 'https://github.com/flasorati';

const App = () => {

    const handlePressGoToGithub = async () => {
        console.log('verificando link');
        const res = await Linking.canOpenURL(urlToMyGithub);
        if(res){
            console.log('link aprovado');
            console.log('abrindo link...');
            await Linking.openURL(urlToMyGithub);
        }
    };
    return (
        <SafeAreaView style={style.container}>
            <StatusBar backgroundColor={colorGithub} barStyle="light-content" />
            <View style={style.content}>
                <Image 
                accessibilityLabel="Foto: Flávia"
                style={style.avatar}
                source={{uri:imageProfileGithub}} 
                />
                <Text 
                    accessibilityLabel="Nickname: Flávia Sorati" 
                    style={[style.defaultText, style.name]}>Flávia Sorati</Text>
                <Text 
                    accessibilityLabel="Nome: flasorati"
                    style={[style.defaultText, style.nickname]}>flasorati</Text>
                <Text 
                    accessibilityLabel="Descrição: Estudante de Análise e Desenvolvimento de Sistemas(Impacta)"
                    style={[style.defaultText, style.description]}>Estudante de Análise e Desenvolvimento de Sistemas(Impacta)
                </Text>
                <Pressable onPress={handlePressGoToGithub}>
                    <View style={style.button}>
                        <Text style={[style.defaultText, style.textButton]}>Open in Github
                        </Text>
                    </View>
                </Pressable>
            </View>
        </SafeAreaView>
    );       
};

export default App;

const style = StyleSheet.create({
    container: {// Column
        backgroundColor: colorGithub,
        flex: 1, //expandir para a tela inteira
        justifyContent: 'center',
        alignItems: 'center',
        //flexDirection: 'row', para alinhar lado a lado
        padding: 20,
    },
    content:{
        alignItems: 'center',
    },

    avatar: {
        height: 200,
        width: 200,
        borderRadius: 100,
        borderColor: 'white',
        borderWidth: 2,

    },
    defaultText:{
        color: colorFontGithub,
    },
    
    name:{
        marginTop: 20,
        fontSize: 24,
        fontWeight: 'bold',
    },
    nickname:{  
        fontSize: 18,
        color: colorDarkFontGithub,
    },
    description:{
        fontSize: 16,
        fontWeight: 'bold',
    },
button:{
    marginTop: 20,
    backgroundColor: colorDarkFontGithub,
    borderRadius: 10,
    padding: 20,
},
textButton:{
    fontSize: 16,
    fontWeight: 'bold',
},
});