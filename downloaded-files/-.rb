class Blender
	# class variables are not used by instances, but rather, by the classes themselves. We can use a class variable to keep track of how many blender objects have been created by this class. When the ruby interpretter reads our code, it starts us off with a @@count of 0 before any blender objects have been created:
	@@count = 0

	# Whenever a blender object gets created, the initialize method automatically gets run. We set make, model and price here:
	def initialize make, model, price
		# increment the Blender class' @@count by 1 when a blender gets created:
		@@count += 1

		# make, model, and price are initially set with the arguments we pass in to Blender.new:
		@make = make
		@model = model
		@price = price

		# every blender starts with @power_on set to false, so it doesn't
		@power_on = false
	end

	# we can see the make and model, but obviously those can't change once they're set:
	attr_reader :make, :model
	# price can change, so we can create a getter AND a setter for that:
	attr_accessor :price

	# this CLASS method allows us to run Blender.count to get the current number of blenders created:
	def self.count
		@@count
	end

	# if it's on, turn it off, otherwise turn it on:
	def toggle_power
		@power_on = !@power_on
	end

	# if the power is on, blend that sh**! Otherwise, just return the original list of ingredients:
	def blend ingredients
		@power_on ? ingredients.join('').split('').shuffle.join('') : ingredients
	end
end

# our groceries in an array:
ingredients = ["mango", "pineapple", "orange"]
# build a blender!
my_blender = Blender.new("Nutribullet", "XT-5000-Pro", 49.99)

# turn it on before we make a smoothie:
my_blender.toggle_power
# mmm delicious!
p my_blender.blend ingredients

# how many blenders do we have? 1
p Blender.count