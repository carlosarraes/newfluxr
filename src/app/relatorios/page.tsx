'use client'

import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { CalendarIcon } from '@radix-ui/react-icons'
import dayjs from 'dayjs'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

export default function Home() {
  const formSchema = z.object({
    initialDate: z.date({
      required_error: 'Data inicial é obrigatória',
      invalid_type_error: 'Data inicial inválida',
    }),
    finalDate: z.date({
      required_error: 'Data final é obrigatória',
      invalid_type_error: 'Data final inválida',
    }),
  })

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      initialDate: undefined,
      finalDate: undefined,
    },
  })

  const { data, refetch } = useQuery({
    queryKey: ['relatorios'],
    queryFn: async () => {
      const values = form.getValues()
      const startDate = dayjs(values.initialDate).format('YYYY-MM-DD')
      const endDate = dayjs(values.finalDate).format('YYYY-MM-DD')

      const { data } = await axios.get(
        `http://localhost:3000/api/expenses?id=1&startDate=${startDate}&endDate=${endDate}`,
      )

      return data
    },
    enabled: false,
  })

  const onSubmit = () => {
    refetch()
  }

  console.log(data)

  return (
    <section className="p-2 text-white">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="flex w-full justify-between gap-4">
          <FormField
            control={form.control}
            name="initialDate"
            render={({ field }) => (
              <FormItem className="flex flex-col grow">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={'outline'}>
                        {field.value ? (
                          dayjs(field.value).format('DD/MM/YYYY')
                        ) : (
                          <span>Data Inicial</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onDayClick={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="finalDate"
            render={({ field }) => (
              <FormItem className="flex flex-col grow">
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant={'outline'}>
                        {field.value ? (
                          dayjs(field.value).format('DD/MM/YYYY')
                        ) : (
                          <span>Data Final</span>
                        )}
                        <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={field.value}
                      onDayClick={field.onChange}
                      disabled={(date) => date > new Date() || date < new Date('1900-01-01')}
                      initialFocus
                    />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="grow self-center" type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </section>
  )
}
