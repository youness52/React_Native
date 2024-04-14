import React, { useEffect, useState } from 'react';
import { View, Text ,ScrollView ,TouchableOpacity,StyleSheet} from 'react-native';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);


  const handleDelete = async (id) => {
    try {
      // Perform delete operation using Axios
        alert('Deleted '+ id);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  const handleUpdate = async (id) => {
    alert('Updated '+ id );
  };
  return (
    <ScrollView >
      {data.map(item => (
        <View key={item.id} style={styles.card}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.body}>{item.body}</Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, styles.deleteButton]}
              onPress={() => handleDelete(item.id)}>
              <Text style={styles.buttonText}>Delete</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.updateButton]}
              onPress={() => handleUpdate(item.id)}>
              <Text style={styles.buttonText}>Update</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({

    card: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
        marginBottom: 20,
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.2,
        shadowRadius: 4.65,
        elevation: 6,
        width: '100%',
      },
      title: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
      },
      body: {
        fontSize: 16,
        marginBottom: 10,
      },
      buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 5,
      },
      deleteButton: {
        backgroundColor: 'red',
      },
      updateButton: {
        backgroundColor: 'blue',
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
});

export default MyComponent;
