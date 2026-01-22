from groq import Groq
 
client = Groq(api_key='')
resp = client.chat.completions.create(
  model="llama3-70b-8192",
  messages=[{"role":"user", "content":"Explain sales drop in Q4"}]
)
print(resp.choices[0].message["content"])
