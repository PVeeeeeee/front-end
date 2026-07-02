import { useState, useMemo } from 'react'
import { View, Text, TouchableOpacity, Modal, Pressable } from 'react-native'
import { Calendar as RNCalendar } from 'react-native-calendars'
import { Feather } from '@expo/vector-icons'

import { LocaleConfig } from 'react-native-calendars'

LocaleConfig.locales['pt-br'] = {
  monthNames: [
    'Janeiro','Fevereiro','Março','Abril','Maio','Junho',
    'Julho','Agosto','Setembro','Outubro','Novembro','Dezembro'
  ],
  monthNamesShort: [
    'Jan','Fev','Mar','Abr','Mai','Jun',
    'Jul','Ago','Set','Out','Nov','Dez'
  ],
  dayNames: [
    'Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado'
  ],
  dayNamesShort: ['D','S','T','Q','Q','S','S'],
  today: 'Hoje'
}

LocaleConfig.defaultLocale = 'pt-br'

const todayString = new Date().toLocaleDateString('en-CA')

export default function Calendar() {
  const [open, setOpen] = useState(false)
  const [date, setDate] = useState<string>(todayString)

  const formattedDate = useMemo(() => {
    const [y, m, d] = date.split('-')
    return `${d}/${m}/${y}`
  }, [date])

  return (
    <View className="w-full">
      <TouchableOpacity
        className="w-full bg-preto rounded-lg flex-row p-3 justify-between items-center"
        onPress={() => setOpen(true)}
        activeOpacity={0.8}
      >
        <Feather name="calendar" size={24} color="#FFFFF2" />
        <Text className="text-branco-100 text-xl">Data:</Text>
        <Text className="text-branco-100 font-bold text-xl">{formattedDate}</Text>
      </TouchableOpacity>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}
      >
        <Pressable
          className="flex-1 bg-preto/60 justify-center items-center"
          onPress={() => setOpen(false)}
        >
          <Pressable
            className="bg-branco-100 rounded-xl p-4 w-11/12"
            onPress={e => e.stopPropagation()}
          >
            <RNCalendar
              onDayPress={day => {
                setDate(day.dateString)
                setOpen(false)
              }}
              markedDates={{
                [todayString]: {
                  marked: true,
                  dotColor: '#124993'
                },
                [date]: {
                  selected: true,
                  selectedColor: '#124993'
                }
              }}
              theme={{
                backgroundColor: '#FFFFF2',
                calendarBackground: '#FFFFF2',
                dayTextColor: '#1E1E1E',
                monthTextColor: '#1E1E1E',
                arrowColor: '#1E1E1E',
                todayTextColor: '#124993',
                selectedDayTextColor: '#FFFFF2',
            }}

            />
          </Pressable>
        </Pressable>
      </Modal>
    </View>
  )
}
