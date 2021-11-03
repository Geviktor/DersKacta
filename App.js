import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput, Keyboard, TouchableWithoutFeedback } from 'react-native';
import image from "/home/gev/CheckFSchool/images/ege.png";
import DateTimePicker from '@react-native-community/datetimepicker';

export default function App() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [num, setNum] = useState(null);
  const [resultVisible, setVisible] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  let result;

  if (resultVisible === true) {
    if (date.getDay() == 2) {
        if (num % 2 === date.getDate() % 2) {
          result = (
            <View style={styles.resultView}>
              <Text style={styles.resultText}>
                Bugun ilk gruptasin!
              </Text>
              <Text style={styles.resultText}>
                Gorsel Programlama-I: 08.15 - 10.30
              </Text>
              <Text style={styles.resultText}>
                Veri Tabani-II: 12.30 - 14.45
              </Text>
            </View>
          );
        } else {
          result = (<View style={styles.resultView}>
            <Text style={styles.resultText}>
              Bugun ikinci gruptasin!
            </Text>
            <Text style={styles.resultText}>
              Gorsel Programlama-I: 10.30 - 12.30
            </Text>
            <Text style={styles.resultText}>
              Veri Tabani-II: 14:45 - 17.00
            </Text>
          </View>);
        };
    } else if (date.getDay() == 3){
         if (num % 2 === date.getDate() % 2) {
          result = (
            <View style={styles.resultView}>
              <Text style={styles.resultText}>
                Bugun ilk gruptasin!
              </Text>
              <Text style={styles.resultText}>
                Acik Kaynak Isletim Sistemleri: 10.15 - 11.15
              </Text>
              <Text style={styles.resultText}>
                Nesne Tabanli Programlama-I: 12.30 - 14.45
              </Text>
            </View>
          );
        } else {
          result = (<View style={styles.resultView}>
            <Text style={styles.resultText}>
              Bugun ikinci gruptasin!
            </Text>
            <Text style={styles.resultText}>
              Acik Kaynak Isletim Sistemleri: 11.15 - 12.15
            </Text>
            <Text style={styles.resultText}>
              Nesne Tabanli Programlama-I: 14:45 - 17.00
            </Text>
          </View>);
        };
    } else {
        result = (<View style={styles.resultView}>
            <Text style={styles.resultText}>
                Bugun dersin yok!
            </Text>
            <Text style={styles.resultText}>
                Derslerin sadece sali ve carsamba gunleri.
            </Text>
            </View>);
    };
  }

  return (
    <TouchableWithoutFeedback onPress={ () => { Keyboard.dismiss() } }>
    <View style={styles.container} keyboardShouldPersistTaps='handled'>
      <View style={styles.main}>

        <View style={styles.logoView}>
            <Image
                source={image}
                style={styles.logo}
            />
        </View>

        <View style={styles.textView}>
            <Text style={styles.texts}>EGE MYO</Text>
            <Text style={styles.texts}>Bilgisayar Programciligi</Text>
            <Text style={styles.texts}>Bugun ders saat kacta?</Text>
        </View>

        <View style={styles.datePicker}>
            <Text style={styles.label}>Tarih: </Text>
            <TouchableOpacity style={styles.date} onPress={() => { setShow(true) }}>
                <Text style={styles.dateText}>
                    {date.toDateString()}
                </Text>
            </TouchableOpacity>
        </View>

        <View style={{ width: 250 }}>
          {show && (
            <DateTimePicker
              testID="dateTimePicker"
              value={date}
              mode="date"
              is24Hour={true}
              display="default"
              onChange={onChange}

            />
          )}
        </View>

        <View>
            <TextInput placeholder='Ogrenci no son hanesi' maxLength={1} style={styles.numInput} onChangeText={(input) => { setNum(input); setVisible(false) }} value={num} keyboardType="numeric" />
        </View>

        <View style={styles.submit}>
            <Button title="Ders Kacta?" color="#545aa7" onPress={() => { setVisible(true); Keyboard.dismiss() }} />
        </View>

        <View style={styles.result}>
            {result}
        </View>

      </View>
    </View>
    </TouchableWithoutFeedback>

  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#6495ed',
        width: '100%',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        backgroundColor: '#5485dd',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        paddingBottom: 30,
        width: '90%',
        height: 750,
        borderRadius: 10,
    },
    logoView: {
        display: 'flex',
        width: '100%',
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 50,
    },
    logo: {
        width: 200,
        height: 200,
    },
    textView: {
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        alignItems: 'center',
        marginBottom: 30,
    },
    texts: {
        fontSize: 15,
        color: 'white',
    },
    datePicker: {
        display: 'flex',
        flexDirection: 'row',
    },
    dateText: {
        padding: 5,
        color: 'black',
    },
    label: {
        padding: 5,
        color: 'white',
    },
    date: {
       borderRadius: 10,
       textAlign: 'center',
       shadowColor: 'black',
       shadowOffset: { width: 0, height: 2 },
       shadowRadius: 6,
       shadowOpacity: 0.26,
       backgroundColor: 'white',
       elevation: 10,
    },
    numInput: {
        borderRadius: 10,
        textAlign: 'center',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 6,
        shadowOpacity: 0.26,
        backgroundColor: 'white',
        elevation: 10,
        margin: '5%',
        padding: '3%',

    },
    submit: {
        marginTop: 20,
    },
    result: {
        marginTop: 20,
    },
    resultView: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    resultText: {
        fontSize: 15,
        color: 'white',
    },
});
