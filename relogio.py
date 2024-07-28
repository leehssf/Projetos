from tkinter import *
import tkinter
from datetime import datetime

# import pyglet # pip intall pyglet
# pyglet.font.add_file("digital-7.ttf")

fundo = #87cefa
cor = #ac1313
janela=Tk()
janela.title("")
janela.geometry("440x180")
janela.resizable(width=FALSE, height=FALSE)
janela.configure(bg=#87cefa)

def relogio():
  tempo=datetime.now()
  hora=tempo.strftime("%H:%M:%S")
  dia_semana=tempo.strftime("%A")
  dia=tempo.day
  mes=tempo.strftime("%b")
  ano=tempo.strftime("%Y")

  l1.config(text=hora)
  l1.after(200, relogio)
  l2.config(text=dia_semana + "  " + str(dia) + "/" + str(mes) + "/" + str(ano))

print(hora + "/" + dia_semana + dia + "/" + mes + "/" + ano)

l1=label(janela, text="", font=("digital-7 80"), bg=fundo, fg=cor)
l1.grid(row=0, column=0, sticky=NW, padx=5)

l2=label(janela, text="", font=("digital-7 20"), bg=fundo, fg=cor)
l2.grid(row=0, column=0, sticky=NW, padx=5)

relogio()
janela.mainloop()
