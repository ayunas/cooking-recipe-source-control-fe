import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  crForm: {
   // margin: 16
  },              
    tagButtons: {
        borderRadius: 50,
        width: '30%',
        alignItems: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 8,
        marginRight: 5,
        margin: 5,
        backgroundColor: '#8FCC70'
    },
    tagButtonPressed: {
        borderRadius: 50,
        width: "30%",
        alignItems: 'center',
        height: 40,
        paddingTop: 10,
        marginBottom: 8,
        marginRight: 5,
        margin: 5,
        backgroundColor: '#3BA405',
    },
    fontColorWhite: {
      color: 'white'
    },
    baseText:
    {
      //   Recipe by: 
      fontSize: 15,
    },
    header: {
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf: 'center'
  
    },
    titleText: {
      //   Recipe Title Name
      fontSize: 16,
      color:  '#363838',
    
    },
    textInputStyles: {
      fontSize: 14,
        color: '#363838',
        marginBottom: 10,
        marginLeft: 14
       
    },
    totalTimeContainer: {
      height: 40,
      borderRadius: 4,
      borderWidth: 0.8,
      borderColor: '#363838',
      padding: 10,
      marginLeft: 14,
      marginRight: 14,
      marginBottom: 10, 
      marginTop: 10,
    },
    notesContainer: { 
      height: 76,
       padding: 10, 
       borderWidth: 0.8, 
       borderColor: '#363838',
        borderRadius: 4,
        marginLeft: 14,
        marginRight: 14,
      },
    container: {
      //   Typically for inputs
      borderRadius: 4,
      borderWidth: 0.8,
      borderColor: '#363838',
      height: 40
    },
    dropdownText: {
      //    Text shown before clicking the dropdown
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: 'black',
      fontSize: 18,
      marginTop: 15
    },
    dropdown: {
      //    Text shown in dropdown bar
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: 'black',
      fontSize: 15,
      marginTop: 15,
    },
    doneButton: {
      width: 205,
      height: 60,
      padding: 30
    }
})

module.exports = styles