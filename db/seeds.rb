require 'faker'

puts "seeding survey questions"

Survey.create(q1: "question 1", q2: "question 2", q3: "question 3", q4: "question 4", q5: "question 5", q6: "question 6", q7: "question 7", q8: "question 8", q9: "question 9", q10: 'question 10')

def yesno
    var = rand 0..1
    puts var
    if var == 0
        "no"
    else
        "yes"
    end
end

puts "creating users, places and responses"

5.times do
    user = User.create(username: Faker::Name.first_name, password: "12345")
    now_place = Place.create(location: Faker::Address.country)
    UserLocation.create(user_id: user.id, place_id: now_place.id, location_type: "now")
    born_place = Place.create(location: Faker::Address.country)
    UserLocation.create(user_id: user.id, place_id: born_place.id, location_type: "born")
    parents_place = Place.create(location: Faker::Address.country)
    UserLocation.create(user_id: user.id, place_id: parents_place.id, location_type: "parents")
    Response.create(user_id: user.id, r1: yesno, r2: yesno, r3: yesno, r4: yesno, r5: yesno, r6: yesno, r7: yesno, r8: yesno, r9: yesno, r10: yesno)
end

puts "finished creating"

