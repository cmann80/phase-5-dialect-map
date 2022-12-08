require 'faker'

puts "destroying database"

User.destroy_all
UserLocation.destroy_all
Place.destroy_all
Response.destroy_all


puts "seeding survey questions"

Survey.create(
    q1: "Do 'caught' and 'cot' sound the same to you?", 
    q2: "Do you have a specialized word or expression for when it rains while sunny?", 
    q3: "Does the final vowel in 'Monday,' Friday' etc. rhyme with 'Cindy' to you?", 
    q4: "Do 'really' and 'sit' have the same vowel sound for you?", 
    q5: "Do 'roof' and 'room' have the same vowel sound to you?", 
    q6: "Do you put a stress on the first word of 'cream cheese'?", 
    q7: "Do you call those little lobstery things in the lake a 'crawdad'?", 
    q8: "Do you pronounce the 'h' in 'herb?", 
    q9: "Do you call a round thing in the middle of a street intersection a 'roundabout'?", 
    q10: "Do you call high speed roads that go across the country a 'freeway'?")

    

def yesno
    var = rand 0..1
    if var == 0
        "no"
    else
        "yes"
    end
end

puts "creating users, places and responses"

5.times do
    user = User.create(username: Faker::Name.first_name, password: "12345")
    now_place = Place.create(location: Faker::Address.unique.country)
    UserLocation.create(user_id: user.id, place_id: now_place.id, location_type: "now")
    born_place = Place.create(location: Faker::Address.unique.country)
    UserLocation.create(user_id: user.id, place_id: born_place.id, location_type: "born")
    parents_place = Place.create(location: Faker::Address.unique.country)
    UserLocation.create(user_id: user.id, place_id: parents_place.id, location_type: "parents")
    Response.create(user_id: user.id, r1: yesno, r2: yesno, r3: yesno, r4: yesno, r5: yesno, r6: yesno, r7: yesno, r8: yesno, r9: yesno, r10: yesno)
end

puts "finished creating"

