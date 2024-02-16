import {Button, StyleSheet, Touchable} from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import {Text, View} from '@/components/Themed';
import {useState} from "react";
import {QueryClient, QueryClientProvider, useQuery} from "@tanstack/react-query";
import {sum} from "@/lib";

const Thingy = () => {
  const thingy = useQuery({
    queryKey: ['random'], queryFn: async () => {
      return Promise.resolve(Math.random());
    },
  })

  return <Text>{thingy.data}</Text>
}

export default function TabTwoScreen() {
  const [client] = useState(() => new QueryClient())

  return (
    <QueryClientProvider client={client}>
      <View style={styles.container}>
        <Text style={styles.title}>Tab Two</Text>
        <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)"/>

        <Thingy/>

        <Text>{sum(10, 12)}</Text>

        <Button onPress={() => client.refetchQueries()} title="Click me"/>

        <EditScreenInfo path="app/(tabs)/two.tsx"/>
      </View>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
