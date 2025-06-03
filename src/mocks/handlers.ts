import { http, HttpResponse } from 'msw'

export const handlers = [
  http.get('https://api.example.com/list', ()=>{
    return HttpResponse.json({
      id: 'test-1234',
      firstName: 'John',
      lastName: 'Doe'
    })
  })
]