import { createClient } from '@/utils/supabase/server'
import { cookies } from 'next/headers'

export default async function Page() {
  const cookieStore = cookies()
  const supabase = createClient(cookieStore)
  const { data: notes } = await supabase.from('notes').select()
  const count2 = await (await supabase.from('notes').select('*', { count: 'exact' })).count
  return <pre>
    {JSON.stringify(count2, null, 2)}
    {JSON.stringify(notes, null, 2)}
    </pre>
}