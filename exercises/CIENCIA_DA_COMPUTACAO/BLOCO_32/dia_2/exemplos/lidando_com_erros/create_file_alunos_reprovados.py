def failed_students(failed_students=[]):
    with open("estudantes.txt", "r") as file:
        for name_and_score in file:
            if int(name_and_score.split(" ")[1]) < 6:
                failed_students.append(name_and_score)
        with open("reprovados.txt", "w") as reprovados:
            reprovados.writelines(failed_students)


failed_students()
